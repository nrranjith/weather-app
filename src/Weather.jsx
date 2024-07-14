import { useState } from "react";
import axios from 'axios';

const Weather = ()=>{
  
  const [city ,setcity] = useState("");
  const [weather,setweather]= useState();
  const [temp,settemp] = useState();
  const [des,setdes] =useState()
  const handleChange = (eve)=>{
    setcity(eve.target.value)
  };
  const getWeather =()=>{
    let weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9afd00b2060093da9813439c7d6a544b`)
    weatherData.then((success)=>{
      console.log(success.data)
      setweather(success.data.weather[0].main)
      settemp(success.data.main.temp)
      setdes(success.data.weather[0].description)

    })
  } 
  return(
    <div className='bg-black p-20'>
    <div className='p-12 border rounded-md bg-white '>
      <h1 className="text-2xl font-medium ">Weather Report</h1>
      <p>I can Give You a Weather Report About Your City!</p>
      <input value={city} onChange={handleChange} type="text" placeholder="Enter your city name" className='border rounded-md bg-transparent border-black p-2 mt-2'></input><br></br>
      <button onClick={getWeather} className='border border-black rounded-md  bg-black text-white p-2 mt-2'>Get Report</button>
      <div className='mt-2'>
      <h1> <b>Weather:{weather}</b></h1>
      <p><b>Temperature:{temp}</b></p>
      <p><b>Description:{des}</b></p>
    </div>
    </div>
    

    </div>
  )
   
    
};
export default Weather;