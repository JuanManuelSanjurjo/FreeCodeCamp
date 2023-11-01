const dataURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
let dataSet;
let baseTemp;
const chart = d3.select(".container")

fetch(dataURL)
    .then( res => res.json())
    .then((data)=>{
        dataSet = data.monthlyVariance
        baseTemp = data.baseTemperature
        getChart()
    })
    .catch(e => {
        console.log(e)
    })

function getChart(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const colors = ["#00008d", "#2c2ca8", "#2c88d3", "#d1eaff", "#faf38f", "#f09c2f", "#ff6600", "#ff5100", "#af3801","#c20e01"];
    // const colors = ["#000080", "#0000e6", "#9999ff", "#ffffff", "#ffff66", "#ffcc00", "#ff6600", "#ff3300", "#800000","#2f0f61"];
    const width = 1500
    const height = 800
    const padding = 80

    let minYear = d3.min(dataSet, d => d.year)
    let maxYear = d3.max(dataSet, d => d.year)
    let years = maxYear - minYear;

    const xScale = d3.scaleBand()
                    // .domain([d3.min(dataSet, d => d.year), d3.max(dataSet, d => d.year)])
                    .domain(dataSet.map( d => d.year))
                    .range([padding, width - padding])
    
    const yScale =  d3.scaleBand()
                    .domain(months)
                    .range([height - padding, padding])

    const legendScale = d3.scaleLinear()
                          .domain([0,10])
                          .range([0, 500])
                        
    const svg = chart.append("svg")
                .attr("width", width)          
                .attr("height", height)  
        
    chart.append("svg")
        .attr("id","legend")
        .selectAll("#rectLegend")
        .data(colors)
        .enter()
        .append("rect")
        .attr("id","rectLegend")
        .attr("class", "cellLegend")         
        .attr("x", (d,i) => i * 50)
        .attr("y", 0)
        .attr("width", 50)         
        .attr("height", 50)
        .style("fill", d => d)

    chart.append("div")
        .attr("id","tooltip")

    svg.selectAll("cell")
        .data(dataSet)
        .enter()
        .append("rect")
        .attr("class", "cell") 
        .attr("data-month",d => d.month - 1 )
        .attr("data-year", d => d.year)
        .attr("data-temp", d => (baseTemp + d.variance).toFixed(2))
        .attr("x", d => xScale(d.year))         
        .attr("y", d => yScale(months[d.month - 1]))         
        .attr("width", () => ((width - (2*padding)) / years)  )         
        .attr("height", () => ((height - (2*padding)) / months.length))
        .style("fill", d => assignColor(baseTemp + d.variance))
        .on("mouseover", (e,d)=> showTooltip(e,d))         
        .on("mouseout", (e,d)=> hideTooltip(e,d))     
        
        function showTooltip(e,d){
            d3.select("#tooltip")
                .attr("data-year", d.year)
                .attr("data-month", d.month)
                .style("display","block")
                .style("left", e.pageX + 10 + "px")
                .style("top", e.pageY - 200 + "px")
                .text("Year: " +d.year + " " + months[d.month - 1] + " /  Temp: " + (baseTemp + d.variance).toFixed(2) + " " + d.variance.toFixed(2))
        }

        function hideTooltip(e,d){
            d3.select("#tooltip")
                .style("display","none")
        }

    const xAxis = d3.axisBottom(xScale).tickValues(xScale.domain().filter( d => !(d%10) ))  
    const yAxis = d3.axisLeft(yScale) 
    const legendAxis = d3.axisBottom(legendScale)

    chart.select("svg")
    .append("g")
    .attr("id","x-axis")
    .text("tick")
    .attr("transform", `translate(0,${height - padding})`)
    .call(xAxis)
    
    chart.select("svg")
    .append("g")
    .attr("id","y-axis")
    .attr("transform", `translate(${padding},0)`)
    .call(yAxis);

    chart.select("#legend")
    .append("g")
    .attr("id","legend-axis")
    .attr("transform", `translate(0,${50})`)
    .call(legendAxis);

    function assignColor(d){
        if ( d <= 2.8)
         return colors[0]
        else if ( d > 2.8 && d <= 3.9)
         return colors[1]
        else if ( d > 3.9 && d <= 5.0)
         return colors[2]
        else if ( d > 5.0 && d <= 6.1)
         return colors[3]
        else if ( d > 6.1 && d <= 7.2)
         return colors[4]
        else if ( d > 7.2 && d <= 8.3)
         return colors[5]
        else if ( d > 8.3 && d <= 9.5)
         return colors[6]
        else if ( d > 9.5 && d <= 10.6)
         return colors[7]
        else if ( d > 10.6 && d <= 11.7)
         return colors[8]
        else if ( d > 11.7 && d <= 12.8)
         return colors[9] 
        else   
            return colors[9] 
     
    }
}


