import './App.css';
import {incrementVisitorCount} from './Info.js';
import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export function App() {
  const API_KEY = "9226baddfee64796960172156231407";

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  let ctime = new Date().toLocaleTimeString();
  const [date, setDateTime] = useState(ctime);

  setInterval(() => {
    setDateTime(new Date().toLocaleTimeString())
  }, 10000,clearInterval());



  const fetchWeather = async () => {
      try{
        setWeatherData("");
        var url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
        await fetch(url)
       .then(response =>{
        if(!response.ok){
          throw new Error(response.message)
        }
        return response.json();
       })
       .then(setWeatherData);
      }
      catch(error){
        console.log(error);
         alert("Please enter a valid city name.")
      }
      
   };

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(city){
      fetchWeather();
    }
  }

  useEffect(() =>{
    incrementVisitorCount();
  }, []);

//  useEffect( async () => {
  //         const fetchWeather = async () => {
  //     try{
  //       setWeatherData("");
  //       var url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  //       await fetch(url)
  //      .then(response =>{
  //       if(!response.ok){
  //         throw new Error(response.message)
  //       }
  //       return response.json();
  //      })
  //      .then(setWeatherData);
  //     }
  //     catch(error){
  //       console.log(error);
  //        alert("Please enter a valid city name.")
  //     }
      
  //  };       
  //  fetchWeather()
  //     }
  //     , [city]);

  return (
    <>
      <div className="App">
      <div className=""></div>
      <div className='d-flex flex-column'>
      <p id='useCount'>0</p>
      <h1>Weather App!</h1>
      
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-column'>
        <input className='mb-2' type='text' value={city} placeholder='Enter your city name' onChange={(e) => setCity(e.target.value)}></input>
         <button className='mb-2 btn btn-primary' type='submit'>Get weather</button>
        </div>
      </form>
        
      {weatherData && (
        <div className='card d-flex justify-content-center'>
          <img alt="" style={{width: "8rem" , display:'flex', justifyContent : 'center'}} className='card-img-top Weather-logo' src='/weather_logo.jpg'/>
          <div className='card-body'>
          <h2>{weatherData.current.temp_c}c</h2>
          <h5>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h5>
          <h6 style={{marginBottom:'20px'}}><img alt='' style={{width : '4rem'}} src='/Humidity.png'/><h5>{weatherData.current.humidity} Humidity</h5></h6>
          <h5 className=''>Wind speed : {weatherData.current.wind_mph} mph</h5>
          </div>
        </div>
      )}

      </div>  
      <div></div>  
    </div>  


    <div style={{position: 'fixed', bottom : 0, width:'100%'}}>
      <hr></hr>
      <div className='d-flex justify-content-around'>
      <div></div>
      <p style={{display:'flex', justifyContent:'center'}}>Developed by Amardeep K</p>
      <h5 style={{color: 'blue'}}>{date}</h5>
      </div>
      
    </div>
    </>
    
  );
}

