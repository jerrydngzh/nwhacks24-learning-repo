import { TGetVenueOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import { useMemo } from "react";
import "./App.css";
import useMapView from "./useMapView";
import {useVenue} from "./useVenue";

export default function App() {
  // See Trial API key Terms and Conditions
  // https://developer.mappedin.com/api-keys
  const options = useMemo<TGetVenueOptions>(
    () => ({
      venue: "mappedin-demo-mall",
      clientId: "5eab30aa91b055001a68e996",
      clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1"
    }),
    []
  );

  const venue = useVenue(options);
  const { elementRef, mapView, mapRef} = useMapView(venue);

  return <div id="app" ref={elementRef} />;
}