import axios from "axios"
const WEATHER_API_KEY=process.env.NEXT_PUBLIC_WEATHER_APP_KEY
import { latLongType } from "@/model/model"


export const httpCurrentApi =async ({lat,long}:latLongType) =>{
    
    const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric&lang=fa`
    try{
        
       const response = await axios.get(api)
       const data = await response.data
       return await data
       
    }catch(e){
        console.log('error',e)
    }
}
export const httpForecastApi =async ({lat,long}:latLongType) =>{
    
    const api =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric&lang=fa&cnt=6`
    try{
       const response = await axios.get(api)
       const data = await response.data
       
       return await data
       
    }catch(e){
        console.log('error',e)
    }
}


