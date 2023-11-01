
const Display = ({result, display})=>{



    return (
        <>
            <div id="operation">
                <div id="display" value={display}>
                    {display}
                </div>
                <div id="result" value={result}>
                    {result}
                </div>
            </div>
        </>

    )
 }


 export default Display;