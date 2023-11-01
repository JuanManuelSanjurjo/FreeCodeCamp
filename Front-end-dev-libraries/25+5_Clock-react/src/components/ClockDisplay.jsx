import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function ClockDisplay({ props : { breakLength, setBreakLength, sessionLength,setSessionLength,minutes, setMinutes, seconds, setSeconds,active, setActive }}) {

  useEffect(()=>{
    setMinutes(sessionLength)
  },[sessionLength])

  function display(){
    let min=  minutes;
    let sec = seconds;

    if(min < 10){
      min = "0"+ min;
    }
    if(seconds < 10){
      sec = "0"+ sec;
    }
    return `${min}:${sec}`
  }
  
  return (
    <div className='clockDisplayContainer'>
        <h2 id="timer-label">{active}</h2>
        {/* <h1 id="time-left">{`${minutes}: ${seconds}`}</h1> */}
        <h1 id="time-left">{display()}</h1>
    </div>
  )
}

ClockDisplay.propTypes = {
    props: {
        breakLength : PropTypes.number,
        sessionLength: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
        setBreakLength: PropTypes.func,
        setSessionLength: PropTypes.func,
        setMinutes: PropTypes.func,
        setSeconds: PropTypes.func,
    }
}   
export default ClockDisplay
