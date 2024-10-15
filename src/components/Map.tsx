'use client';

import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVkZHllZG93YXJkIiwiYSI6ImNpc3NzaHR1dDAwMHkyem56YmIza3B3ZG4ifQ.xDomQJSpM2bh7D5397Ed9Q';

export default function Map() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            const map = new mapboxgl.Map({
              container: mapContainerRef.current,  // Correct type here
              style: 'mapbox://styles/mapbox/dark-v11',
              center: [106.827183, -6.175394],  // Monas, Jakarta
              zoom: 12,
            });

            const el = document.createElement('div');
            el.className = 'custom-marker';
            el.style.width = '30px';
            el.style.height = '30px';
            el.style.backgroundImage = 'url(pin.png)';
            el.style.backgroundSize = 'cover';

            new mapboxgl.Marker(el)
                .setLngLat([106.827183, -6.175394])
                .addTo(map);
      
            return () => map.remove(); // Clean up the map on unmount
        }
    }, [])
    
    return (
        <div ref={mapContainerRef} style={{ width: '100%', height: '600px' }} />
    )    
}