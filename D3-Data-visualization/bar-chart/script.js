
let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
let dataSet;
let chart = d3.select(".container")

fetch(url)
    .then(response => response.json())
    .then(data => {
        dataSet = data.data
        getChart()
    })
    .catch(error => {
        console.log(error)
    })




function getChart(){

    const width = 1800;
    const height = 800;
    const margin = 50;

    const dates = d3.scaleTime()
                     .domain([new Date(dataSet[0][0]), new Date(dataSet[dataSet.length - 1][0])])
                     .range([margin , width - margin])
    
    const GDP = d3.scaleLinear()
                     .domain([0, d3.max(dataSet, (d) => d[1])])
                     .range([height - margin, margin])
       
    const svg =  chart.append("svg")
                      .attr("width", width )
                      .attr("height", height)

    chart.append("div")
        .attr("id","tooltip")
        .attr("class","data-date")

    svg.selectAll("rect")
        .data(dataSet)
        .enter()
        .append("rect")
        .attr("class","bar")
        .attr("data-date",(d) => d[0])
        .attr("data-gdp", (d) => d[1])
        .attr("x", (d,i) => dates(new Date(d[0])) )
        .attr("y", (d,i) => GDP(d[1])  )
        .attr("width", 5 )
        .attr("height", (d,i) =>  height - margin - GDP(d[1]))
        .on("mouseover", (e,d) =>  {showTooltip(e, d)})
        .on("mouseout", (d) => {hideTooltip()})
        .text()
    
    function showTooltip(evt, d) {
        // console.log(evt)
        d3.select("#tooltip")
          .style("display", "block")
          .attr("data-date", d[0])
          .attr("data-gdp",  d[1])
          .style("top", evt.clientY - 120 + "px"  )
          .style("left",evt.clientX - 200 + "px")
          .text(`${d[0]} - GDP: ${d[1]}`)
    }

    function hideTooltip() {
        d3.select("#tooltip")
          .style("display", "none")
    }

    svg.append("g")
    .attr("id","x-axis")
    .text("tick")
    .attr("transform", `translate(0,${height - margin})`)
    .call(d3.axisBottom(dates));

    svg.append("g")
    .attr("id","y-axis")
    .attr("transform", `translate(${margin},0)`)
    .call(d3.axisLeft(GDP));           

}

/*
User Story #1: My chart should have a title with a corresponding id="title".

User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".

User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".

User Story #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".

User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.

User Story #6: Each .bar should have the properties data-date and data-gdp containing date and GDP values.

User Story #7: The .bar elements' data-date properties should match the order of the provided data.

User Story #8: The .bar elements' data-gdp properties should match the order of the provided data.

User Story #9: Each .bar element's height should accurately represent the data's corresponding GDP.

User Story #10: The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.

User Story #11: The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.

User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.*/ 