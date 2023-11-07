import { POINTS } from "../../mocks/mocks";
import { CITY } from "../../mocks/mocks";
import { IPoints } from "../../interfaces/interfaces";
import css from "./Map.module.scss";
import React, { useRef, useEffect } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import useMap from "../../hooks/useMap";

const MapBlock = () => {
  const mapRef =  useRef(null);
  const map = useMap(mapRef, CITY);
  useEffect(() => {
    if (map) {
      POINTS.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          })
          .addTo(map);
      });
    }
  }, [map, POINTS]);

  return (
    <div className={css.wrapper} style={{ height: "600px" }} ref={mapRef}>
      
    </div>
  );
};

export default MapBlock;
