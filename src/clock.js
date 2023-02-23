import React,{ useState } from "react";
import "./clock.css"


const Clock=()=>{
    let time =new Date().toLocaleTimeString();
    const [currentTime , setCurrentTime] =useState(time);
  
    const updateTime = () =>{
      let time= new Date().toLocaleTimeString();
      setCurrentTime(time);
    }
    setInterval(updateTime,1000);
  
    return(
      <div>
        <h1 className="clock">{currentTime}</h1>
      </div>
    )
   }

   export default Clock;