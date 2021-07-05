import React from "react";
import {MapContainer, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "../list";

function Map({countries, casesType, center, zoom }) {
  return (
      <MapContainer className = "map" center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
  );
}

export default Map;