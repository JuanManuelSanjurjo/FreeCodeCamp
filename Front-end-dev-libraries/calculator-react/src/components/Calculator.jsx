import PropTypes from "prop-types"
import { useEffect } from "react";

const Calculator = ({display, result,  setDisplay, setResult})=>{

    function addToCalculation(current){
        if(current == "ac"){
            setDisplay(0);
            setResult("0");
        }else if(display == 0 ){
            if(display[1] == "."){
                setDisplay(display + current );
                setResult(display + current );
            }else{
                setDisplay(current);
                setResult(current);
            } 
        }else{
            setDisplay(display + current );
            setResult(display + current );
        }
    }
    function addComa(){
        if(display.length > 0){
            let aux = display.split(/[^0-9.]/);
            aux = aux.pop()
        
            if(!aux.includes(".")){
                setResult(".");
                setDisplay(display + ".")  
            }
        }else{
            setResult(result +".");
            setDisplay(result + ".")  
        }
    }

    function operator(op) {
        // define an array with operators
        const operators = ["+", "-", "*", "/"]; 
        
        // split the current display into an array
        let aux = display.split(''); 
    
        // check if the last character in 'display' is an operator
        if (operators.includes(aux[aux.length - 1])) {
            // if the last element is an operator (excluding '-') or the new operator is not '-', replace it
            aux[aux.length - 1] = op;

            if (op != '-') {
                aux[aux.length - 1] = op;
            }else 
            if ((aux[aux.length - 1]  != '-' && op == '-')){
                aux.push(op);
            }
            // else {
            //     // if the last operator is '-' and the new operator is also '-', allow it
            //     aux.push(op);
            // }
    
            // update the display and result
            setDisplay(aux.join(''));
            setResult(op);
        }else {
            // add new operator to the string
            setDisplay(display + op);
            setResult(op);
        }
    }

    function equals(){
        let aux = [...display];
        aux = aux.join("")
        while(aux[0] == 0){
            aux = aux.slice(1);
        }

        try{
            let rta = eval(aux); 
            setResult(rta.toString());
            setDisplay(rta.toString());
        }catch{
            setResult(0);
            setDisplay("Input / mathematical error");
        }
    }

    useEffect(()=> {
        console.log(result)
        console.log(display)
    },[result])

    return (
        <div className="calculator">
            <button id="clear"    onClick={() => addToCalculation("ac")} /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */ value={"ac"}>   AC  </button>
            <button id="divide"   onClick={() => operator("/")}          /* onKeyDown={(e) => operatorKeyboard(e)}          */  value={"/"}>   /   </button>
            <button id="multiply" onClick={() => operator("*")}          /* onKeyDown={(e) => operatorKeyboard(e)}          */  value={"*"}>    x   </button>
            <button id="seven"    onClick={() => addToCalculation("7")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"7"}>    7   </button>
            <button id="eight"    onClick={() => addToCalculation("8")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"8"}>    8   </button>
            <button id="nine"     onClick={() => addToCalculation("9")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"9"}>    9   </button>
            <button id="subtract" onClick={() => operator("-")}          /* onKeyDown={(e) => operatorKeyboard(e)}          */  value={"-"}>    -   </button>
            <button id="four"     onClick={() => addToCalculation("4")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"4"}>    4   </button>
            <button id="five"     onClick={() => addToCalculation("5")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"5"}>    5   </button>
            <button id="six"      onClick={() => addToCalculation("6")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"6"}>    6   </button>
            <button id="add"      onClick={() => operator("+")}          /* onKeyDown={(e) => operatorKeyboard(e)}          */  value={"+"}>    +   </button>
            <button id="one"      onClick={() => addToCalculation("1")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"1"}>    1   </button>
            <button id="two"      onClick={() => addToCalculation("2")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"2"}>    2   </button>
            <button id="three"    onClick={() => addToCalculation("3")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"3"}>    3   </button>
            <button id="zero"     onClick={() => addToCalculation("0")}  /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"0"}>    0   </button>
            <button id="decimal"  onClick={() => addComa()}              /* onKeyDown={(e) => addToCalculationKeyboard(e)}  */  value={"."}>    .   </button>
            <button id="equals"   onClick={() => equals()}               /* onKeyDown={() => equals()}                      */     >     =   </button>
        </div>
    )
 }

 Calculator.propTypes = {
    display: PropTypes.string,
    result: PropTypes.string,
    setDisplay: PropTypes.func,
    setResult: PropTypes.func,
}

export default Calculator;
