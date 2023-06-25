import  React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [data,setData]=useState(null)
  const[input,setInput]=useState("")
  const[search,setSearch]=useState("")
  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=a173693ecd8bbfa0be884da53d12e546`)
        const data=await response.json()
        if (response.ok ){
          setData(data)
        }
        console.log(data)
        // console.log(data.weather[0])
      }
      catch(error){
        // console.log(error)
      }
      // franklin.ali@interswitchgroup.com
      // melegbe@interswitchng.com
      // ehia.erhaboh@interswitchgroup.com
    }
    fetchUser()
  },[search])
  const handleSearch=(e)=>{
    e.preventDefault();
    setSearch(input);
  }
 
 
  return(
    <main>
     <form>
      <input type="text" placeholder="Input a city.." onChange={(e)=>setInput(e.target.value)} value={input}/>
      <button onClick={handleSearch} type="submit">Search</button>
     </form>
     {data?
     <div className="weatherInfo">
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
      <p>Weather description:{data?.weather[0].description}</p>
      <h2>{data?.name.toUpperCase()}</h2>
      <p><span>Wind Speed:</span>{data?.wind.speed}</p>
      <p><span>Temp:</span>{data?.main.temp}&deg;C</p>
      <p><span>Country:</span>{data?.sys.country}</p>
     </div>
     :<h1 class="noInfoText">Do you want to know the current weather of your city?Please Input a City</h1>}

    </main>
  )
}


export default App
