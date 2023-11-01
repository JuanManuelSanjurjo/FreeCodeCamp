const dataUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json"
let dataSet;
const categories = ["Action", "Adventure", "Animation","Family","Biography", "Comedy", "Drama"]
const colors = ["#df3d3d","#55964d", "#ffe553", "#3f3fc6", "#9c5ed6", "#ee5e25", "orange"  ]

d3.json(dataUrl)
    .then((data, err) => {
        if(err){
            console.log(err)
        }else{
            dataSet = data
            getChart();
        }
    })


function getChart(){

    let hierarchy = d3.hierarchy( dataSet, node => {
         return node.children
    }).sum(node => {
        return node.value
    }).sort((node1, node2) =>{
        return node2.value - node1.value
    })

    let makeTreeMap = d3.treemap()
                        .size([1300, 700])

    makeTreeMap(hierarchy)

    let rectangles = hierarchy.leaves()

    const chart = d3.select(".container")

    const tooltip = chart.append("div")
                         .attr("id", "tooltip")

    const svg = chart.append("svg")
                     .attr("class", "canvas")


    let allGroups = svg.selectAll("g")
                        .data(rectangles)
                        .enter()
                        .append("g")
                        .attr("transform", (d) => `translate( ${d.x0}, ${d.y0} )`)
                        

    allGroups.append("rect")
            .attr("class", "tile")
            .attr("width", d => d.x1 - d.x0)
            .attr("height", d => d.y1 - d.y0)
            .attr("fill", d => fillColors(d))
            .attr("data-name", d => d.data.name )
            .attr("data-category",  d => d.data.category)
            .attr("data-value",  d => d.data.value)
            .on("mouseover", (e, d) => showTooltip(e,d))
            .on("mouseout", (e, d) => hideTooltip(e,d))


    allGroups.append("text")
            .text( d => d.data.name)
            .attr("x", 5 )
            .attr("y", 20 )

    const legend = chart.append("svg")
                     .attr("id", "legend")

    const legendGroups = legend.selectAll("g")
                               .data(categories)                 
                               .enter()
                               .append("g") 
    legendGroups.append("text")
                .text( (d,i) => categories[i] )
                .attr("x", 75)
                .attr("y", (d,i) => i * 50 + 25 )
                .style("font-size", "20px")
                .style("fill", "antiquewhite")

    legendGroups.append("rect")
                .attr("class", "legend-item")
                .attr("width", 50)
                .attr("height", 50)
                .attr("y", (d, i) => i * 50 )
                .attr("fill", (d, i) => colors[i])
          
}   

function showTooltip(e,d){
    d3.select("#tooltip")
      .style("display", "block")
      .style("top", e.pageY - 100 + "px" )
      .style("left", e.pageX + "px" )
      .attr("data-value", d.data.value)
      .text(`Title: ${d.data.name} | Category: ${d.data.category} | Box-office: ${d.data.value}`)
}
function hideTooltip(e,d){
    d3.select("#tooltip")
      .style("display", "none")
}

function fillColors(d){
    if(d.data.category === "Action"){
        return colors[0] //red
    }else if(d.data.category=== "Adventure"){
        return colors[1] //green
    }else if(d.data.category === "Animation"){
        return colors[2] //yellow
    }else if(d.data.category === "Family"){
        return colors[3] //blue
    }else if(d.data.category === "Biography"){
        return colors[4]  //purple
    }else if(d.data.category === "Comedy"){
        return colors[5] //orangered
    }else if(d.data.category === "Drama"){
        return colors[6]  
    }
}