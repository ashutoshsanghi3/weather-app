import React,{ useEffect, useState } from "react";
function tick(timezone,setTime,setDate){
    let d=new Date();
    let utc=d.getTime() + (d.getTimezoneOffset() * 60000);
    let nd=new Date(utc + (1000*timezone));
    let time=nd.toLocaleTimeString()
    let date=nd.toLocaleDateString();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let month=months[nd.getMonth()]
    let date1=nd.getDate();
    let year = nd.getFullYear();
    year = year.toString().substring(2);
    date=`${date1} ${month} ${year}`
    
    setTime(time)
    setDate(date)
}
function CurrentTime({data}){
    const [time,setTime] = useState('')
    const [date,setDate] = useState('')
    let {timezone} = data;

    useEffect(() => {

        const intervalId = setInterval(() => tick(timezone,setTime,setDate),1000)

        return () => clearInterval(intervalId);
    },[timezone,setTime]);
    return(
        <div id="clock">
            <p>{date}</p>
            <p>{time}</p> 
        </div> 
    )
    
}
export default CurrentTime
