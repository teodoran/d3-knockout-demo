/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this,

            updateElectionData = function () {
                return self.electionData(Math.random() * 100);
            },

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
                var previousValue = self.lineChartData()[
                    self.lineChartData().length - 1
                ].close;
                return self.lineChartData.push(lineDataPoint(previousValue));
            },

            randomPonies = function () {
                return [
                    { name: "Rainbow Dash", value: Math.random() },
                    { name: "Rarity", value: Math.random() },
                    { name: "Fluttershy", value: Math.random() },
                    { name: "Pinkie Pie", value: Math.random() },
                    { name: "Applejack", value: Math.random() },
                    { name: "Twilight Sparkle", value: Math.random() }
                ];
            };

        self.electionData = ko.observable(37);

        self.lineChartData = ko.observableArray([
            lineDataPoint()
        ]);

        self.barChartData = ko.observable(randomPonies());
        self.barChartSmall1 = ko.observable(randomPonies());
        self.barChartSmall2 = ko.observable(randomPonies());

        setInterval(updateLineChartData, 1000);

        setInterval(function () {
            self.electionData(Math.random() * 100);
        }, 3333);

        setInterval(function () {
            self.barChartData(randomPonies());
        }, 3456);

        setInterval(function () {
            self.barChartSmall1(randomPonies());
        }, 2567);

        setInterval(function () {
            self.barChartSmall2(randomPonies());
        }, 2222);
    };
}(D3KD));