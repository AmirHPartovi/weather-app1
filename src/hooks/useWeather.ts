import { useCallback, useEffect, useState } from "react";
import { httpCurrentApi,httpForecastApi } from "./requests";
import { latLongType } from "@/model/model";

function useWeather ({lat,long}:latLongType){

    const [currentWeather, setCurrentWeather]=useState<any>([])
    const [forecastWeather, setForecastWeather]=useState<any>([])
    const [isLoading , setIsLoading]=useState<Boolean>(false)

    const getWeather = useCallback(async()=>{
        setIsLoading(true);
        const current = await httpCurrentApi({lat,long})
        const forecast = await httpForecastApi({lat ,long})
        setCurrentWeather(current)
        setForecastWeather(forecast)
        setIsLoading(false)
      },[])
    useEffect(()=>{
      getWeather()
      },[lat , long])

      return{
        getWeather,
        currentWeather,
        forecastWeather,
        isLoading
      }
}

export default useWeather