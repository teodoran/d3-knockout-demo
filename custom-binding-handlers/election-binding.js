/**
 * Created by kiro on 20/01/14.
 */

ko.bindingHandlers.electionChart = {
    init: function(element) {
        "use strict";

        var width = parseInt(d3.select(element).style("width"), 10),
            height = parseInt(d3.select(element).style("height"), 10),

            svg = d3.select(element)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("class", "election");

        svg.append("rect")
            .attr("class", "republican")
            .attr("width", 0)
            .attr("height", height);

    },
    update: function(element, valueAccessor) {
        "use strict";

        var width = parseInt(d3.select(element).style("width"), 10),
            data = ko.unwrap(valueAccessor()),

            w  = function(seats){
                return parseInt((seats/100) * width);
            };

        d3.select(element).select("rect.republican")
            .transition()
            .duration(750)
            .attr("width", w(data));

    }
};
