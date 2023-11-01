const educationDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
const countyDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"

let educationData;
let countyData;

const chart = d3.select("#container")

d3.json(countyDataURL)
    .then( (data, err) => {
        if(err){
            console.log(err)
        }else{
            countyData = topojson.feature( data , data.objects.counties).features
            console.log(countyData[0])

            d3.json(educationDataURL)
                .then((data, err) => {
                    if(err){
                        console.log(err)
                    }else{
                        educationData = data
                        console.log(educationData[0])
                        getChart()
                    }
                })
        }
    })
    
    
    const colors = ["red","orange","yellow","cyan","antiquewhite"]
function getChart(){
    const canvas = chart.append("svg")
    .attr("class","canvas")
    
    const canvasStyle = getComputedStyle(document.querySelector(".canvas"))
        
    chart.append("div")
            .attr("id","tooltip")

        
    canvas.selectAll("path")
          .data(countyData)
          .enter()
          .append("path")
          .attr("data-fips", d => d.id)
          .attr("data-education", d => findCounty(d.id).bachelorsOrHigher)
          .attr("width", canvasStyle.width)
          .attr("height", canvasStyle.height)
          .attr("d", d3.geoPath())
          .attr("class", "county")
          .style("fill",(d)=> getGradient(d.id))
          .on("mouseover", (e, d) => showTooltip(e, d) )
          .on("mouseout", (e, d) => hideTooltip(e, d) )

    const classification = ["From 0 to 10","From 10 to 25", "From 25 to 50","From 50 to 60", "More than 60"]
    
let  legend = chart.append("svg")
    .attr("id","legend")
    .selectAll("g")
    .data(colors)
    .enter()
    .append("g");

 console.log(legend)

legend.append("rect")
    .attr("x", 0)
    .attr("y", (d,i) => i * 55)
    .attr("height", 50)
    .attr("width", 50)
    .style("fill", (d,i) => colors[i]);

legend.append("text")
    .attr("x", 60)
    .attr("y", (d, i) => i * 55 + 25)
    .style("fill", "antiquewhite")
    .text((d, i) => classification[i] + " %");
        

}

function showTooltip(e,d){
    d3.select("#tooltip")
        .style("display", "block")
        .attr("data-education", findCounty(d.id).bachelorsOrHigher)
        .style("left", e.pageX + 10  + "px")
        .style("top", e.pageY - 20  + "px")
        .style("fill", "red")
        .text(`${findCounty(d.id).area_name} | %${findCounty(d.id).bachelorsOrHigher
        } `)
}   
function hideTooltip(e, d){
    d3.select("#tooltip")
        .style("display", "none")
}  

function findCounty(id){
    return educationData.find( item => (item["fips"] === id) )
}


function getGradient(id){
    let county = findCounty(id)
    let data =  county.bachelorsOrHigher;

    if(data <= 10){
        return colors[0]
    }else if(data > 10 && data <= 25 ){
        return colors[1]
    }else if(data > 25 && data <= 50 ){
        return colors[2]
    }else if(data > 50 && data <= 60 ){
        return colors[3]
    }else{
        return colors[4]
    }
}
