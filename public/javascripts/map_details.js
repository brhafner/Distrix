// "properties":
//         { "name": "Congressional District 14", 
//         "id": "0614", 
//         "STATEID": "06", 
//         "CD116": "14", 
//         "CDSESSION": "116",
//         "STATENAME": "California" }, 
//         "id": "0614" },
//     {
//     "type": "Feature", "geometry": {
//         "type": "Polygon", "coordinates": [[[-122.117, 37.507], [-122.113, 37.51], [-122.108, 37.514], [-122.102, 37.523], [-122.094, 37.53], [-122.09, 37.532], [-122.086, 37.533], [-122.078, 37.534],

export const distrixDetails = {
    "0601": {
        name: "Congressional District 1",
        rep: "LaMalfa",
        party: "Republican",
        phone: "202-225-3076",
        link: "https://lamalfa.house.gov",
        // campaignFunding: "http://www.opensecrets.org/members-of-congress/summary?cid=N00033987",
        // voteSmart: "https://justfacts.votesmart.org/candidate/29713/doug-lamalfa",
        pvi: "R+11",
        medIncome: "$55316",
        ethnicity: [
                "79.08% white",
                "1.68% black",
                "2.89% Asian",
                "11.99% Hispanic",
                "3.51% Native American",
                "0.26% Pacific Islands Americans"
        ]
    },
    "0602": {
        name: "Congressional District 2",
        rep: "Huffman",
        party: "Democrat",
        phone: "202-225-5161",
        link: "https://huffman.house.gov",
        // campaignFunding: "http://www.opensecrets.org/members-of-congress/summary?cid=N00033987",
        // voteSmart: "https://justfacts.votesmart.org/candidate/29713/doug-lamalfa",
        pvi: "R+11",
        medIncome: "$55316",
        ethnicity: [
            "79.08% white",
            "1.68% black",
            "2.89% Asian",
            "11.99% Hispanic",
            "3.51% Native American",
            "0.26% Pacific Islands Americans"
        ]
    },
    "0603": {
        name: "Congressional District 3",
        rep: "Garamendi",
        party: "Democrat",
        phone: "202-225-1880",
        link: "https://garamendi.house.gov",
        // campaignFunding: "http://www.opensecrets.org/members-of-congress/summary?cid=N00033987",
        // voteSmart: "https://justfacts.votesmart.org/candidate/29713/doug-lamalfa",
        pvi: "R+11",
        medIncome: "$55316",
        ethnicity: [
            "79.08% white",
            "1.68% black",
            "2.89% Asian",
            "11.99% Hispanic",
            "3.51% Native American",
            "0.26% Pacific Islands Americans"
        ]
    },
    "0604": {
        name: "Congressional District 4",
        rep: "McClintock",
        party: "Republican",
        phone: "202-225-2511",
        link: "https://mcclintock.house.gov",
        // campaignFunding: "http://www.opensecrets.org/members-of-congress/summary?cid=N00033987",
        // voteSmart: "https://justfacts.votesmart.org/candidate/29713/doug-lamalfa",
        pvi: "R+11",
        medIncome: "$55316",
        ethnicity: [
            "79.08% white",
            "1.68% black",
            "2.89% Asian",
            "11.99% Hispanic",
            "3.51% Native American",
            "0.26% Pacific Islands Americans"
        ]
    }
};













// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// // import * as am4maps from "@amcharts/amcharts4/maps"

// // Create chart instance
// let chart = am4core.create("chartdiv", am4charts.PieChart);

// // Create pie series
// let series = chart.series.push(new am4charts.PieSeries());
// series.dataFields.value = "litres";
// series.dataFields.category = "country";

// // Add data
// chart.data = [{
//     "country": "Lithuania",
//     "litres": 501.9
// }, {
//     "country": "Czech Republic",
//     "litres": 301.9
// }, {
//     "country": "Ireland",
//     "litres": 201.1
// }, {
//     "country": "Germany",
//     "litres": 165.8
// }, {
//     "country": "Australia",
//     "litres": 139.9
// }, {
//     "country": "Austria",
//     "litres": 128.3
// }, {
//     "country": "UK",
//     "litres": 99
// }, {
//     "country": "Belgium",
//     "litres": 60
// }, {
//     "country": "The Netherlands",
//     "litres": 50
// }];

// // And, for a good measure, let's add a legend
// chart.legend = new am4charts.Legend();

// export default chart;