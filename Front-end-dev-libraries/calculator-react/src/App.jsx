import { useState } from "react"
import Calculator from "./components/Calculator"
import Display from "./components/Display"


function App() {
  const [display, setDisplay] = useState(0);
  const [result, setResult] = useState("");

  return (

    <div className="container">
      <Display result={result} display={display}/>
      <Calculator result={result} display={display} setDisplay={setDisplay} setResult={setResult} />     
    </div> 
  
  )
}

export default App
