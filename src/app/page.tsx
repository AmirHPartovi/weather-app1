"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react"
import useWeather from "@/hooks/useWeather";
import { latLongType , CityType } from "@/model/model"
import { Autocomplete, Grid, TextField, Typography } from "@mui/material"
import jsonCities from '../utils/cities.json'


export default function Home() {
const [latLong , setLatLong]=useState<latLongType>({
  lat :35.7219,
  long :51.3347,
})
// const [citiesName,setCitiesName] = useState<Array<string>>([])
// jsonCities.map((item:any)=> setCitiesName(item.title))

const {
  currentWeather,
  forecastWeather,
  isLoading
} = useWeather(latLong)
console.log(currentWeather)



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

              options={['citiesName']}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            
      </Grid>


    </Grid>
  )
}
