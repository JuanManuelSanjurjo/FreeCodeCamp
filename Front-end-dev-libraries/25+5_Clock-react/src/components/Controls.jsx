import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';

function Controls({ props : {breakLength, setBreakLength, sessionLength, setSessionLength, minutes, setMinutes, seconds, setSeconds,active, setActive,isCounting, setIsCounting,reset, setReset }}) {
    const [startStop, setStartStop] = useState(false);
    

    useEffect(() => {
        const myInterval = setInterval(() => {
            if(startStop){
                if (seconds === 0 && minutes !== 0) {
                  setMinutes(minutes - 1);
                  setSeconds(59);
                }else if (seconds === 0 && minutes === 0) {
                    if(active == "Session"){
                        setMinutes(breakLength);
                        setActive("Break")
                    }else{
                        setMinutes(sessionLength);
                        setActive("Session")
                    }
                }else {
                    setSeconds(seconds - 1);
                
                }
            }
        }, 1000);
        return () => clearInterval(myInterval);

    }, [startStop,  minutes, seconds]);
   
     useEffect(()=>{
        setMinutes(sessionLength);
        setSeconds(0);
        setBreakLength(5)
        setSessionLength(25)
        setStartStop(false)
        setActive("Session")
        let audio = document.querySelector("audio");
        audio.pause();
        audio.currentTime = 0;
        // audio.load()
    },[reset])


    function regressiveClock(){
       setStartStop(!startStop)
       setIsCounting(true)
    }

    function resetFunc() {
        setReset(!reset)
        setIsCounting(false)

        // setMinutes(sessionLength);
        // setSeconds(59);
        // setBreakLength(5);
        // setSessionLength(25);
        // setMinutes(25);
        // setSeconds(0);
    }

    return (
    <div className='controlsContainer'>
        <button id="start_stop" onClick={regressiveClock}>{startStop ? 'STOP' : 'START'}</button>
        <button id="reset" onClick={resetFunc}> RESET </button>
    </div>
    )
}

Controls.propTypes = {
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

export default Controls;
