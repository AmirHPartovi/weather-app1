"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react"
import { currentApi , forecastApi} from "../api/api"
import { latLongType , CityType } from "@/model/model"
import { Autocomplete, Grid, TextField } from "@mui/material"
import jsonCities from '../utils/cities.json'


export default function Home() {
const [latLong , setLatLong]=useState<latLongType>({
  lat :35.7219,
  long :51.3347,
})
const [currentWeather, setCurrentWeather]=useState<any>([])
const [forecastWeather, setForecastWeather]=useState<any>([])
const [isLoading , setIsLoading]=useState<Boolean>(true)

// const cities = JSON.parse(jsonCities)

// useEffect(()=>{
//   const Func = async()=>{
//     const current = await currentApi(latLong)
//     const forecast = await forecastApi(latLong)
//     setCurrentWeather(current)
//     setForecastWeather(forecast)
//   }
// Func()
// },[latLong])
  return (
    <Grid
    container
    display={'flex'}
    justifyContent={'center'}
    >
      <Grid
      item>
          <Autocomplete
              disablePortal
              
              options={JSON.parse(jsonCities).title}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
      </Grid>


    </Grid>
  )
}
