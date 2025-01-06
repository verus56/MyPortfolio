import React from "react";
import "@/styles/contact/map-box.css";

interface MapBoxProps {
  googleMapUrl: string;
}

function MapBox({ googleMapUrl }: MapBoxProps) {
  return (
    <section className="mapbox" data-mapbox="true">
      <figure>
        <iframe
          title="map address"
          src={googleMapUrl}
          width="400"
          height="300"
          loading="lazy"
        ></iframe>
      </figure>
    </section>
  );
}

export default MapBox;
