import axios from "axios"
const WEATHER_API_KEY=process.env.NEXT_PUBLIC_WEATHER_APP_KEY
import { latLongType } from "@/model/model"


export const currentApi =async ({lat,long}:latLongType) =>{
    
    const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric&lang=fa`
    try{
        
       const callData = await axios.get(api)
       const data = await callData.data
       console.log(data)
       return data
       
    }catch(e){
        console.log('error',e)
    }
}
export const forecastApi =async ({lat,long}:latLongType) =>{
    
    const api =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric&lang=fa&cnt=6`
    try{
       const callData = await axios.get(api)
       const data = await callData.data
       console.log(data)
       return data
       
    }catch(e){
        console.log('error',e)
    }
}


