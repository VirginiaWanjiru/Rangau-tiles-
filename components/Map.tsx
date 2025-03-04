/*Since the map was loaded on client side, 
we need to make this component client rendered as well*/
'use client'

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

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


const MapComponent = () => {
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