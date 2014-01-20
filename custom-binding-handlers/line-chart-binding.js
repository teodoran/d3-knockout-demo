/**
 * Created by kiro on 20/01/14.
 */

ko.bindingHandlers.lineChart = {
    init: function(element) {
        "use strict";

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),
            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom;

        var svg = d3.select(element).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")");

        svg.append("g")
            .attr("class", "y axis")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");

        svg.append("path")
            .attr("class", "line data");

    },
    update: function(element, valueAccessor) {
        "use strict";

        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            elementWidth = parseInt(d3.select(element).style("width"), 10),
            elementHeight = parseInt(d3.select(element).style("height"), 10),
            width = elementWidth - margin.left - margin.right,
            height = elementHeight - margin.top - margin.bottom;

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

        var line = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.close); });

        var svg = d3.select(element).select("svg g");

        var data = ko.unwrap(valueAccessor());

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.close; })]);

        // draw the x-axis on the canvas
        svg.select("g.x.axis")
            .transition()
            .duration(750)
            .call(xAxis);

        // drwa the y-axis on the canvas
        svg.select("g.y.axis")
            .transition()
            .duration(750)
            .call(yAxis);

        svg.select("path.line.data")
            .datum(data)
            .transition()
            .duration(750)
            .attr("d", line);
    }
};
