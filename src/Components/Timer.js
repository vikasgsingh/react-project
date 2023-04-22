import React, { useEffect, useState } from "react";

const Timer = ()=>{
    const [time,setTime] = useState(0);
    useEffect(()=>{
        let interval = setInterval(()=>{
            setTime(time+1);
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[time])
    return(
        <>
        <h1> Time started: {time}</h1>
        </>
    )
}

export default Timer;