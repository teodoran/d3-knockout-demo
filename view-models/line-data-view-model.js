/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this,

            updateLineChartData = function () {
                var previousValue = self.lineChartData()[
                    self.lineChartData().length - 1
                ].close;
                return self.lineChartData.push(lineDataPoint(previousValue));
            };

        self.lineChartData = ko.observableArray([
            lineDataPoint()
        ]);

        setInterval(updateLineChartData, 1000);

    };
}(D3KD));