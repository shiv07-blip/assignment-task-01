import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Location {
  name: string;
  lat: number;
  lng: number;
  description: string;
  category: string;
  color: string;
}

const locations: Location[] = [
  { name: "Preikestolen", lat: 58.9864, lng: 6.1904, description: "Famous cliff with amazing fjord views", category: "Sightseeing", color: "#E91E63" },
  { name: "Trolltunga", lat: 60.1242, lng: 6.7400, description: "Iconic rock formation", category: "Hike", color: "#9C27B0" },
  { name: "Geirangerfjord", lat: 62.1010, lng: 7.0940, description: "UNESCO World Heritage fjord", category: "Sightseeing", color: "#FF9800" },
  { name: "Lofoten Islands", lat: 68.2100, lng: 13.6090, description: "Arctic beauty and fishing villages", category: "Sightseeing", color: "#4CAF50" },
  { name: "Nærøyfjord", lat: 60.8833, lng: 6.9667, description: "Narrow and dramatic fjord", category: "Activity", color: "#0BA5C5" },
  { name: "Bergen", lat: 60.3913, lng: 5.3221, description: "Colorful harbor city", category: "City", color: "#E91E63" },
  { name: "Svolvær", lat: 68.2340, lng: 14.5680, description: "Gateway to Lofoten", category: "City", color: "#9C27B0" },
  { name: "Henningsvær", lat: 68.1500, lng: 14.2000, description: "Beautiful fishing village", category: "Village", color: "#FF9800" },
];

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map centered on Norway
    map.current = L.map(mapContainer.current).setView([62.5, 10.0], 5);

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.current);

    // Add markers
    locations.forEach((location) => {
      const customIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background-color: ${location.color};
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 14px;
        ">${locations.filter(l => Math.abs(l.lat - location.lat) < 0.1 && Math.abs(l.lng - location.lng) < 0.1).length}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map.current!);

      marker.bindPopup(`
        <div style="font-family: system-ui, sans-serif;">
          <h3 style="font-size: 16px; font-weight: bold; margin: 0 0 8px 0; color: #1a1a1a;">${location.name}</h3>
          <p style="margin: 0 0 4px 0; color: #666; font-size: 12px;"><strong>${location.category}</strong></p>
          <p style="margin: 0; color: #444; font-size: 13px;">${location.description}</p>
        </div>
      `);
    });

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Access My Local Secrets
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Get a curated list of all the best things to do with exact location, detailed info and inspiring content
      </p>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: "600px" }}>
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </section>
  );
};

export default InteractiveMap;
