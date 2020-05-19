

window.onload = function () {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_region_usa_congressional_caLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // var modata = polygonSeries.MapPolygonSeriesDataItem = chartData[0].val
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.togglable = true;
    // polygonTemplate.tooltipText = modata;
    polygonTemplate.fill = am4core.color("#156064");
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#F8E16C");

    // polygonTemplate.tooltip.interactionsEnabled = true;
    
    
    let currentActive;
    polygonTemplate.events.on("hit", (event) => {
        // if we have some country selected, set default state to it
        if (currentActive) {
            currentActive.isActive = false;
        }
        
        this.console.log(event.target._dataItem._dataContext.id)

        // someOtherFunction(id){
            // lookup obj in db i build
            // return div with found data, and set as child to this div

            // will need to remove child (in case user already clicked on a district), then add new child

            // this would change the class name of the details div
            // and tell it to lookup data based on id passed in 
        // }

        // this.console.log(windowevent.target)
        // window.event1 = event.target
        // chart.zoomToMapObject(event.target);
        // currentActive = event.target;
    })
}


// var series3 = chart.series.push(new am4charts.CircleBullet());
    // series3.tooltipHTML = series3.tooltip.label.interactionsEnabled = true;
    // series3.tooltip.pointerOrientation = "vertical";
    // polygonSeries.tooltip.label.interactionsEnabled = true;
    // polygonSeries.tooltip.pointerOrientation = "vertical"

    // var cl = polygonTemplate.states.create("click")
    // var dataSet = new AmCharts.DataSet();
    // dataSet.dataProvider = chartData;
    // dataSet.fieldMappings = [{
    //     fromField: "name",
    //     toField: "value",
    //     fromField: "val",
    //     toField: "value"
    // }];









    // var chart = new AmCharts.AmStockChart();
    // chart.pathToImages = "http://www.amcharts.com/lib/3/images/";

    // var dataSet = new AmCharts.DataSet();
    // dataSet.dataProvider = chartData;
    // dataSet.fieldMappings = [{
    //     fromField: "val",
    //     toField: "value"
    // }];
    // dataSet.categoryField = "date";
    // chart.dataSets = [dataSet];

    // var stockPanel = new AmCharts.StockPanel();
    // chart.panels = [stockPanel];

    // var legend = new AmCharts.StockLegend();
    // stockPanel.stockLegend = legend;

    // var panelsSettings = new AmCharts.PanelsSettings();
    // panelsSettings.startDuration = 1;
    // chart.panelsSettings = panelsSettings;

    // var graph = new AmCharts.StockGraph();
    // graph.valueField = "value";
    // graph.type = "column";
    // graph.title = "MyGraph";
    // graph.fillAlphas = 1;
    // stockPanel.addStockGraph(graph);

    // var categoryAxesSettings = new AmCharts.CategoryAxesSettings();
    // categoryAxesSettings.dashLength = 5;
    // chart.categoryAxesSettings = categoryAxesSettings;

    // var valueAxesSettings = new AmCharts.ValueAxesSettings();
    // valueAxesSettings.dashLength = 5;
    // chart.valueAxesSettings = valueAxesSettings;

    // var chartScrollbarSettings = new AmCharts.ChartScrollbarSettings();
    // chartScrollbarSettings.graph = graph;
    // chartScrollbarSettings.graphType = "line";
    // chart.chartScrollbarSettings = chartScrollbarSettings;

    // var chartCursorSettings = new AmCharts.ChartCursorSettings();
    // chartCursorSettings.valueBalloonsEnabled = true;
    // chart.chartCursorSettings = chartCursorSettings;

    // var periodSelector = new AmCharts.PeriodSelector();
    // periodSelector.periods = [{
    //     period: "DD",
    //     count: 1,
    //     label: "1 day"
    // }, {
    //     period: "DD",
    //     selected: true,
    //     count: 5,
    //     label: "5 days"
    // }, {
    //     period: "MM",
    //     count: 1,
    //     label: "1 month"
    // }, {
    //     period: "YYYY",
    //     count: 1,
    //     label: "1 year"
    // }, {
    //     period: "YTD",
    //     label: "YTD"
    // }, {
    //     period: "MAX",
    //     label: "MAX"
    // }];
    // chart.periodSelector = periodSelector;

    // chart.write("chartdiv");




// Ref Below
    //  isbn is a computer programming textbook
//     let isbn = '0201558025';
//     axios.get(`/books/${isbn}`)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

//     let query = "grace hopper";
//     axios.get(`/search?string=${query}`)
//         .then((response) => {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });