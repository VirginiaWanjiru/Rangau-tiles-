/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

//Map's styling
const defaultMapContainerStyle = {
    width: '20%',
    height: '20vh',
    borderRadius: '15px 0px 0px 15px',
};

//K2's coordinates
const defaultMapCenter = {
    lat: -1.286389,
    lng: 36.817223
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

// Default map options
const defaultMapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
};

  const MapComponent = () => {
      const map = useRef<mapboxgl.Map | null>(null);
  
      useEffect(() => {
          try {
              if (!map.current) {
                  map.current = new mapboxgl.Map({
                      container: 'map',
                      style: 'mapbox://styles/mapbox/streets-v11',
                      center: [defaultMapCenter.lng, defaultMapCenter.lat],
                      zoom: defaultMapZoom,
                  });
              }
  
              // Add navigation controls
              map.current.addControl(
                  new mapboxgl.NavigationControl({
                      visualizePitch: true,
                  }),
                  'top-right'
              );
  
              // Define coordinates
              const coordinates = { lng: 36.817223, lat: -1.286389 };
  
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
      }, []);
  
      return (
          <div className="w-full">
              <GoogleMap
                  mapContainerStyle={defaultMapContainerStyle}
                  center={defaultMapCenter}
                  zoom={defaultMapZoom}
                  options={defaultMapOptions}
              >
              </GoogleMap>
          </div>
      )
  };



export { MapComponent };