"use client"; // This is a client component 👈🏽
import { useCallback, useEffect, useState } from "react"
import useWeather from "@/hooks/useWeather";
import { latLongType , CityType } from "@/model/model"
import { Autocomplete, Grid, TextField, Typography,ThemeProvider, Button} from "@mui/material"
import jsonCities from '../utils/cities.json'
import theme from "@/theme/theme";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import useTrackLocation from "@/hooks/useTrackLocation";
export default function Home() {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const [city,setCity]=useState<CityType>(  {
    id: 358,
    title: 'تهران',
    slug: 'Tehran',
    province_id: 24,
    latitude: 31.94,
    longitude: 51.647778
  })
  const[cityName,setCityName]=useState<string>('')
  const [latLong , setLatLong]=useState<latLongType>({
  lat :35.7219,
  long :51.3347,
})
const citiesName:Array<String>= jsonCities.map((item:CityType)=> {return (item.title)})

const handleChangeCity = (e:any)=>{
  e.preventDefault()
  setCityName(e.target.value)
  const newCity = jsonCities.filter((item:CityType)=>{item.title===cityName? item : city })
  setCity(newCity[0])
  setLatLong({
    lat:city.latitude,
    long:city.longitude
  })
}
const{
  latLongTrack,
  handleTrackLocation,
  locationErrorMsg,
  isFindingLocation,
} = useTrackLocation()
const handleLocation=useCallback(()=>{
  handleTrackLocation()
  setLatLong(latLongTrack)
},[latLong])
const {
  getWeather,
  currentWeather,
  forecastWeather,
  isLoading
} = useWeather(latLongTrack)

useEffect(()=>{
  getWeather()
},[latLong])
console.log(latLong)
console.log(currentWeather)
console.log(locationErrorMsg)
console.log(isFindingLocation)

  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
    <Grid
    container
    display={'flex'}
    justifyContent={'center'}
    bgcolor={'background.default'}
    
    >
      <Grid
      item
      container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      >
        <Grid
        item
        xs={10}
        md={3}>
          <Autocomplete
              
              color="primary"
              disablePortal
              options={citiesName}
              sx={{
                width: 300,
               }}
              renderInput={
                (params) => 
                <TextField 
                     onChange={handleChangeCity}
                     label="شهرهای ایران" 
                     value={cityName}
                     {...params} 
                />}
                                        
            />
        </Grid> 
        <Grid
          item
          xs={2}
          md={1}>
              <Button
              onClick={handleLocation} 
              variant="outlined"
              sx={{
                height:'60px',
               
              }}>
                <MyLocationRoundedIcon/>
              </Button>
        </Grid>   
      </Grid>


    </Grid>
    </ThemeProvider>
    </CacheProvider>
  )
}
