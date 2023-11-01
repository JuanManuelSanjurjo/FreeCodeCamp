import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function LengthControl({ props : { breakLength, setBreakLength, sessionLength,setSessionLength,minutes, setMinutes, seconds, setSeconds,isCounting, setIsCounting}}) {


    function handleDecrement(decrement, setter){
        if(!isCounting){
           if(decrement > 1){
                setter(decrement - 1) 
           }
       } 
    }

    function handleIncrement(increment, setter){
        if(!isCounting){
           if(increment < 60){
                setter(increment + 1) 
           }
       } 
    }
        
   


  return (
    <div className='lengthControlContainer'>
        <div>
            <h2 id="break-label">Break Length</h2>
            <div>
                <button id="break-decrement"  onClick={()=> handleDecrement(breakLength,setBreakLength)}>DOWN</button>   {/*breakLength > 1  ? setBreakLength(breakLength - 1): breakLength*/}
                <p id="break-length">{breakLength}</p>
                <button id="break-increment" onClick={()=> handleIncrement(breakLength ,setBreakLength)} >UP</button>
            </div>
        </div>
        <div>
            <h2 id="session-label">Session Length</h2>
            <div>
                <button id="session-decrement" onClick={()=> handleDecrement(sessionLength,setSessionLength)}>DOWN</button>
                <p id="session-length">{sessionLength}</p>
                <button id="session-increment" onClick={()=> handleIncrement(sessionLength ,setSessionLength)}>UP</button> 
            </div>
        </div>

    </div>
  )
}

LengthControl.propTypes = {
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

export default LengthControl
