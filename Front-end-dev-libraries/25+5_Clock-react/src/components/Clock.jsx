import { useEffect, useState } from 'react';
import LengthControl from './LengthControl'
import ClockDisplay from './ClockDisplay'
import Controls from './Controls'

function Clock() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [active, setActive] = useState("Session")
    const [isCounting, setIsCounting] = useState(true)
    const [reset, setReset] = useState(false);


    // const [leadingMinutes, setLeadingMinutes] = useState(25);
    // const [leadingSeconds, setLeadingSeconds] = useState(0);

    const props = {
        breakLength: breakLength,
        setBreakLength: setBreakLength,
        sessionLength: sessionLength,
        setSessionLength: setSessionLength,
        minutes: minutes,
        setMinutes: setMinutes,
        seconds: seconds,
        setSeconds: setSeconds,
        active: active,
        setActive: setActive,
        isCounting:isCounting, 
        setIsCounting: setIsCounting,
        reset: reset,
        setReset: setReset,
    }

    useEffect(()=>{
      if(seconds == 0 && minutes == 0 ){
        let audio = document.querySelector("audio");
        audio.play()
        audio.load()
      }
      
    },[seconds,minutes])
    
    // if(reset ){
    //   let audio = document.querySelector("audio");
    //     audio.pause();
    //     audio.currentTime = 0;
    //     // audio.load()
    // }


  return (
    <div className='clockContainer'>
        <LengthControl props={props} />
        <ClockDisplay props={props}/>
        <Controls props={props}/>
        <audio id="beep" autoPlay src='public\free-sound-effects-ALARM_BE.mp3' type="audio/mp3"></audio>
    </div>
  )
}

Clock.propTypes = {

}

export default Clock
