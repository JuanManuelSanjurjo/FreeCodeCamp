import Display from "./components/Display"
import Drums from "./components/Drums"
import { useState } from "react";


function App() {
  const [display, setDisplay] = useState("");

  return (
    <>
        <h1>Drum Machine</h1> 
        <div id="drum-machine">
          <Drums setDisplay={setDisplay}/> 
          <Display display={display} />
        </div>
    </>
  )
}

export default App
