import { POINTS } from "../../mocks/mocks";
import { CITY } from "../../mocks/mocks";
import css from "./Map.module.scss";
import { useRef, useEffect } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import useMap from "../../hooks/useMap";
import { URL_MARKER_DEFAULT } from "./const";
import { Marker, layerGroup } from "leaflet";

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [60, 60],
  iconAnchor: [20, 60],
});

const MapBlock = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      POINTS.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });
        marker.setIcon(defaultCustomIcon).addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, POINTS]);

  return (
    <div className={css.wrapper} style={{ height: "600px" }} ref={mapRef}></div>
  );
};

export default MapBlock;
