import { latLongType } from "@/model/model";
import {  useState } from "react";


const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState<string>("");
  const [latLongTrack, setLatLongTrack] = useState<latLongType>({
    lat:0,
    long:0
  });
  const [isFindingLocation, setIsFindingLocation] = useState(false);



  const success = (position:any) => {
    const latitude :number = position.coords.latitude;
    const longitude:number = position.coords.longitude;
    

    setLatLongTrack({
        lat : latitude,
        long: longitude
    });

    setLocationErrorMsg("");
    setIsFindingLocation(false);
  };

  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setIsFindingLocation(true);

    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
      setIsFindingLocation(false);
    } else {
      // status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    latLongTrack,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation,
  };
};

export default useTrackLocation;