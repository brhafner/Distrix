const distDetails = require('./map_details') 
const AxiosUtil = require('../../requests/axios_util');

window.onload = function () {
    let apiRes;
    AxiosUtil.fetchAllCongressMembers().then(res => apiRes = res.data.results);
  
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_region_usa_congressional_caLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // var modata = polygonSeries.MapPolygonSeriesDataItem = chartData[0].val
    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.togglable = true;
    // polygonTemplate.tooltipText = modata;
    polygonTemplate.fill = am4core.color("#156064");
    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#F8E16C");
    
    let currentActive;
    polygonTemplate.events.on("hit", (event) => {
        // if we have some country selected, set default state to it
        if (currentActive) {
            currentActive.isActive = false;
        }
        let elementId = event.target._dataItem._dataContext.CD116
        document.getElementById("main-details-container").innerHTML = formatData(elementId, apiRes);
        
        // var hasChild = document.getElementById("main-details-container").hasChildNodes();
        // if(hasChild){
        //     // replace child node
        //     // var textnode = document.createTextNode("banana");
        //     var list = document.getElementById("main-details-container");   // Get the <ul> element with id="myList"
        //     list.removeChild(list.childNodes[0]); 
        //     // list.appendChild(textnode);
        //     list.appendChild(formatData(elementId))
        // } else {
        //     // add childnode 
        //     let node = document.getElementById("main-details-container")
        //     // var textnode = document.createTextNode("Water");
        //     // node.appendChild(textnode); 
        //     node.appendChild(formatData(elementId))
        // }
    });
};


const formatData = (lookupId, apiRes) => {
    let ref = parseInt(lookupId);
    let funding = distDetails.funding[`${ref}`];
    let voting = distDetails.voting[`${ref}`];
    let thisDistrict;

    apiRes.forEach((obj) => {
        if (parseInt(obj.district) === ref){
            thisDistrict = obj
        }
    })

     const returnDiv = `<div class="details-container">
            <h1>CA Congressional District ${thisDistrict.district}</h1>
            <div class="rep-container">
                <p>Name: ${thisDistrict.name}</p>
                <p>Party: ${thisDistrict.party}</p>
                <p>Phone: ${thisDistrict.phone}</p>
                <div class="external-links">
                    <a href="${thisDistrict.link}" target="_blank">Visit Website</a>
                    <a href="${funding}" target="_blank">Campaign Funding</a>
                    <a href="${voting}" target="_blank">Voting Record</a>
                </div>
            </div>
        </div>`

    return returnDiv;
};