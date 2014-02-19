/*global ko, d3*/

ko.bindingHandlers.electionChart = {
    init: function(element) {
        "use strict";

        // finding the height and width of the html element.
        var width = parseInt(d3.select(element).style("width"), 10),
            height = parseInt(d3.select(element).style("height"), 10),

        // creating the svg canvas
        svg = d3.select(element)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "election");

        // adding the republican rectangle to the canvas
        svg.append("rect")
            // setting the css class to the svg element.
            .attr("class", "republican")
            .attr("width", 0)
            .attr("height", height);

    },
    update: function(element, valueAccessor) {
        "use strict";

        // parsing the data from the data-view-model
        var width = parseInt(d3.select(element).style("width"), 10),
            data = ko.unwrap(valueAccessor()),

            w  = function (seats) {
                return parseInt((seats / 100) * width, 10);
            };

        // painting the rectangle to the canvas
        d3.select(element).select("rect.republican")
            .transition()
            .duration(750)
            // setting what data to use. data
            .attr("width", w(data));

    }
};
