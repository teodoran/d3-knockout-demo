/*global ko, d3*/

ko.bindingHandlers.areaChart = {
    init: function(element, valueAccessor) {
        "use strict";
        var margin = {top: 20, right: 20, bottom: 30, left: 50},

        elementWidth = parseInt(d3.select(element).style("width"), 10),
        elementHeight = parseInt(d3.select(element).style("height"), 10),

        width = elementWidth - margin.left - margin.right,
        height = elementHeight - margin.top - margin.bottom;

        var parseDate = d3.time.format("%d-%b-%y").parse;

        var x = d3.time.scale()
        .range([0, width]);

        var y = d3.scale.linear()
        .range([height, 0]);

        var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

        var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

        var area = d3.svg.area()
        .x(function(d) { return x(d.date); })
        .y0(height)
        .y1(function(d) { return y(d.close); });

        var svg = d3.select(element).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var data = [
        {date: parseDate("1-May-12"), close: 282.13},
        {date: parseDate("30-Apr-12"), close: 383.98},
        {date: parseDate("27-Apr-12"), close: 303.00},
        {date: parseDate("26-Apr-12"), close: 207.70},
        {date: parseDate("25-Apr-12"), close: 410.00},
        {date: parseDate("24-Apr-12"), close: 460.28},
        {date: parseDate("23-Apr-12"), close: 371.70},
        {date: parseDate("20-Apr-12"), close: 472.98},
        {date: parseDate("19-Apr-12"), close: 587.44},
        {date: parseDate("18-Apr-12"), close: 408.34},
        {date: parseDate("17-Apr-12"), close: 309.70},
        {date: parseDate("16-Apr-12"), close: 280.13}
        ];

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.close; })]);

        svg.append("path")
        .datum(data)
        .attr("class", "area")
        .attr("d", area);

        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

        svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
    },
    update: function(element, valueAccessor) {
        "use strict";
    }
};