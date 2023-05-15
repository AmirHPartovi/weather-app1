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
  const [latLong , setLatLong]=useState<latLongType>({
  lat :35.7219,
  long :51.3347,
})
const citiesName:Array<String>= jsonCities.map((item:CityType)=> {return (item.title)})

const {
  currentWeather,
  forecastWeather,
  isLoading
} = useWeather(latLong)
const{
  latLongTrack,
  handleTrackLocation,
  locationErrorMsg,
  isFindingLocation,
} = useTrackLocation()


const handleLocation=()=>{
  handleTrackLocation()
  setLatLong(latLongTrack)
}
console.log(latLong)
console.log(currentWeather)


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
              renderInput={(params) => <TextField {...params} label="شهرهای ایران" />}
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
