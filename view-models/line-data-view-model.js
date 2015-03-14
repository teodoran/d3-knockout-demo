/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this,

            stockChange = function (previousValue) {
                var volatility = 0.7,
                    bias = 1.5,
                    change = bias * volatility * Math.random();

                if (change > volatility || previousValue - change <= 0.1) {
                    return previousValue + change;
                }

                return previousValue - change;
            },

            lineDataPoint = function (previousValue) {
                return {
                    date: new Date(),
                    close: stockChange(previousValue || Math.random() * 10)
                };
            },

            updateLineChartData = function () {
                // if there are elements in the array, set previous value.
                if (self.lineChartData.size>0){
                    var previousValue = self.lineChartData()[
                        self.lineChartData().length - 1
                        ].close;
                }
                return self.lineChartData.push(lineDataPoint(previousValue));
            };

        self.lineChartData = ko.observableArray([
            lineDataPoint()
        ]);

        setInterval(updateLineChartData, 1000);

        // interval for removing all data in array/lineChartData.
        setInterval(function(){
                //console.log("remove data");
                self.lineChartData.removeAll();
            }
            // every 10 sec.
            , 10000);

        //console.log("initiated");

    };
}(D3KD));