// import {Howl} from 'howler';
import '../index.css'
import { useEffect } from "react";


const Drums = ({setDisplay}) => {

    useEffect(()=> {
        window.addEventListener("keydown", plays)
        return ()=>{
            window.removeEventListener("keydown", plays)
        }
    },[])

    const plays = (event) =>{ 
        const pressed = document.getElementById(event.key.toUpperCase());
        pressed.play();
        setDisplay(drumNames[event.key]);
    }  ;

//     const plays = (event, keys, name) =>{
//         if (event.key == keys || event.key == keys.toLowerCase()) {
//             const pressed = document.getElementById(keys.toUpperCase());
//             pressed.play();
//             setDisplay(drumNames[event.key.toUpperCase()]);
//             console.log(event.key)
//         }
// }  ;

    // function howl(src){
    //     let playHowl = new Howl({
    //         src: src
    //     })
    //     playHowl.play()
    // }
        
    return(
        <div className="drums-container">
            <button id="q" value={"loquehayenq"} className="drum-pad"  onClick={() => {document.getElementById("Q").play(); setDisplay("Cev_H2")}}      /* onKeyDown={(e) => plays(e,"Q", "Cev_H2")}    */ >Q
                <audio id="Q" src="../../public/sounds/Cev_H2.mp3" type="audio/mpeg"   className="clip"  ></audio>
            </button>
            <button id="w" className="drum-pad" onClick={() => {document.getElementById("W").play(); setDisplay("Dsc_Oh")}}       /* onKeyDown={(e) => plays(e,"W","Dsc_Oh")}     */ >W
                <audio id="W" src="../../public/sounds/Dsc_Oh.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="e" className="drum-pad" onClick={() => {document.getElementById("E").play(); setDisplay("Heater-1")}}     /* onKeyDown={(e) => plays(e,"E","Heater-1")}   */ >E
                <audio id="E" src="../../public/sounds/Heater-1.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="a" className="drum-pad" onClick={() => {document.getElementById("A").play(); setDisplay("Heater-2")}}     /* onKeyDown={(e) => plays(e,"A","Heater-2")}   */ >A
                <audio id="A" src="../../public/sounds/Heater-2.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="s" className="drum-pad" onClick={() => {document.getElementById("S").play(); setDisplay("Heater-3")}}     /* onKeyDown={(e) => plays(e,"S","Heater-3")}   */ >S
                <audio id="S" src="../../public/sounds/Heater-3.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="d" className="drum-pad" onClick={() => {document.getElementById("D").play(); setDisplay("Heater-4_1")}}   /* onKeyDown={(e) => plays(e,"D","Heater-4_1")} */ >D
                <audio id="D" src="../../public/sounds/Heater-4_1.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="z" className="drum-pad" onClick={() => {document.getElementById("Z").play(); setDisplay("Heater-6")}}     /* onKeyDown={(e) => plays(e,"Z","Heater-6")}   */ >Z
                <audio id="Z" src="../../public/sounds/Heater-6.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="x" className="drum-pad" onClick={() => {document.getElementById("X").play(); setDisplay("Kick_n_Hat")}}   /* onKeyDown={(e) => plays(e,"X","Kick_n_Hat")} */ >X
                <audio id="X" src="../../public/sounds/Kick_n_Hat.mp3" type="audio/mpeg"  className="clip" ></audio>
            </button>
            <button id="c" className="drum-pad" onClick={() => {document.getElementById("C").play(); setDisplay("RP4_KICK_1")}}   /* onKeyDown={() => plays("C","RP4_KICK_1")}    */ >C
                <audio id="C" src={sounds.C}  type="audio/mpeg"  className="clip" ></audio>
            </button>
        </div>

    );  //  howl("../../public/sounds/RP4_KICK_1.mp3" 
}

export default Drums;

const sounds = {
    Q: "../../public/sounds/Cev_H2.mp3",
    W: "../../public/sounds/Dsc_Oh.mp3",
    E: "../../public/sounds/Heater-1.mp3",
    A: "../../public/sounds/Heater-2.mp3",
    S: "../../public/sounds/Heater-3.mp3",
    D: "../../public/sounds/Heater-4_1.mp3",
    Z: "../../public/sounds/Heater-6.mp3",
    X: "../../public/sounds/Kick_n_Hat.mp3",
    C: "../../public/sounds/RP4_KICK_1.mp3"
}

const drumNames = {
    q: "Cev_H2.mp3",
    w: "Dsc_Oh.mp3",
    e: "Heater-1.mp3",
    a: "Heater-2.mp3",
    s: "Heater-3.mp3",
    d: "Heater-4_1.mp3",
    z: "Heater-6.mp3",
    x: "Kick_n_Hat.mp3",
    c: "RP4_KICK_1.mp3"
}