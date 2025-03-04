import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface MapProps {
  small?: boolean;
  coordinates?: [number, number];
}

const Map: React.FC<MapProps> = ({ small = false, coordinates = [7.4951, 9.0579] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes, using a placeholder token
    // In production, this should be replaced with your actual Mapbox token
    mapboxgl.accessToken = 'pk.placeholder.token';
    
    try {
      const mapOptions: mapboxgl.MapOptions = {
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: coordinates, // Using the provided coordinates or default to Nigeria
        zoom: small ? 14 : 12,
      };
      
      map.current = new mapboxgl.Map(mapOptions);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker
      new mapboxgl.Marker({ color: '#f97316' })
        .setLngLat(coordinates)
        .addTo(map.current);
    } catch (error) {
      console.error("Map initialization error:", error);
      // If map fails to load, we'll show a fallback
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [small, coordinates]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      {!map.current && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center p-4">
            <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-gray-600">Location map</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;