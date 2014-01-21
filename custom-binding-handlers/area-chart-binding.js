/*global ko, d3*/

ko.bindingHandlers.areaChart = {
    init: function(element, valueAccessor) {
        "use strict";
        var margin = {top: 20, right: 20, bottom: 30, left: 50},

            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),

            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom;

        var x = d3.scale.linear()
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
            .x(function(d) { return x(d.x); })
            .y0(height)
            .y1(function(d) { return y(d.y); });

        var svg = d3.select(element).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var data = ko.unwrap(valueAccessor());

        x.domain(d3.extent(data, function(d) { return d.x; }));
        y.domain([0, d3.max(data, function(d) { return d.y; })]);

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