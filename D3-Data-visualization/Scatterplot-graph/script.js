
let dataSet;
const chart = d3.select(".container");

fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json")
    .then( dataRaw => {
        console.log(dataRaw)
        // dataRaw.json()  
    })
    .then( data => {
        dataSet = data;
        getGraph();
        console.log(data)
    }).catch((e)=>{
        console.log(e)
    })


function getGraph(){


    const width = 1500 ; 
    const height =  800 ; 
    const padding = 100 ; 

    let maxTime = d3.max( dataSet , d => {
                    let date = new Date()
                    date.setMinutes(parseInt(d.Time.split(":")[0]))
                    date.setSeconds(d.Time.split(":")[1])
                    return date
                })
    let minTime = d3.min( dataSet , d => {
                    let date = new Date()
                    date.setMinutes(d.Time.split(":")[0])
                    date.setSeconds(d.Time.split(":")[1])
                    return date
                })            

    const xScale = d3.scaleLinear()
                   .domain([d3.min(dataSet, (d) => d.Year) - 1 , parseInt(d3.max(dataSet, (d) => d.Year)) + 1])
                   .range([padding, width - padding])

    


    const yScale = d3.scaleTime()
                    //  .domain([d3.max(dataSet, (d) => parseInt(d.Time.replace(":",""))) , d3.min(dataSet, (d) => parseInt(d.Time.replace(":",""))) ])
                     .domain([maxTime, minTime])
                     .range([height - padding , padding])
                     

    const svg = chart.append("svg")
         .attr("width", width)
         .attr("height", height)


    chart.append("div")
        .attr("id", "tooltip")
        .attr("class", "date-year")
        .attr("calss","data-year")

    svg.selectAll("circle")
         .data(dataSet)
         .enter()
         .append("circle")
         .attr("class", "dot")
         .attr("cx", d => xScale(d.Year))
         .attr("cy", d => {
            let date = new Date();
            date.setMinutes(d.Time.split(":")[0])
            date.setSeconds(d.Time.split(":")[1])
            return yScale(date)
            // return yScale(parseInt(d.Time.replace(":","")))
        })
         .attr("r", 10)
         .attr("data-xvalue", d => d.Year)
         .attr("data-yvalue", d => {
            let date = new Date();
            date.setMinutes(d.Time.split(":")[0])
            date.setSeconds(d.Time.split(":")[1])
            return date;
         })
         .on("mouseover", (e,d) => showTooltip(e,d) )
         .on("mouseout", (e,d) => hideTooltip(e,d))


    function showTooltip(e,d){
        d3.select("#tooltip")
            .style("display","block")
            .attr("data-year", d.Year)
            .style("top", e.pageY + 20 + "px")
            .style("left", e.pageX + 20 + "px")
            .text(`${d.Name}: ${d.Year} - ${d.Time}`)
    }
    function hideTooltip(){
        d3.select("#tooltip").style("display", "none")
    }

    const xAxis = d3.axisBottom(xScale).ticks().tickFormat(d3.format("d"))


    chart.select("svg")
    .append("g")
    .attr("id","x-axis")
    .text("tick")
    .attr("transform", `translate(0,${height - padding})`)
    .call(xAxis)
    
    const yAxis = d3.axisLeft(yScale).ticks(d3.timeSecond.every(15)).tickFormat(d3.timeFormat("%M:%S"))

    chart.select("svg")
    .append("g")
    .attr("id","y-axis")
    .attr("transform", `translate(${padding},0)`)
    .call(yAxis);

 
    
    





    
}
 