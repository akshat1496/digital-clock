import { useState,useEffect } from "react"

 function MyComponents() {
const [time,setTime] = useState(new Date());

useEffect(()=>{
    const IntervalID = setInterval(()=>{
       setTime(new Date());
    },1000);

    return ()=>{
        clearInterval(IntervalID)
    }
},[])

function formatTime(){
    let hours = time.getHours();
    const minutes  = time.getMinutes();
    const seconds  = time.getSeconds();
    const am_pm = hours >=  12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
   
    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${am_pm}`;
}

function padZero(number) {
   return (number<10 ? "0":"") + number;
}
return (
    <div className="clock-container">
            <div className="clock">
                <span >{formatTime()}</span>
            </div>
        </div>
);
}

export default MyComponents;