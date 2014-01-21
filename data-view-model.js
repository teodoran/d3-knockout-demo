/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this,

            randomPonies = function () {
                return [
                    { name: "Rainbow Dash", value: Math.random() },
                    { name: "Rarity", value: Math.random() },
                    { name: "Fluttershy", value: Math.random() },
                    { name: "Pinkie Pie", value: Math.random() },
                    { name: "Applejack", value: Math.random() },
                    { name: "Twilight Sparkle", value: Math.random() }
                ];
            },

            lineDataPoint = function () {
                return {
                    date: new Date(),
                    close: Math.random() * 1000 + 500
                };
            },

            updateBarChartData = function() {
                self.barChartData(randomPonies());
            },

            updateElectionData = function () {
                return self.electionData(Math.random() * 100);
            },


            updateLineChartData = function () {
                return self.lineChartData.push(lineDataPoint());
            };

        self.electionData = ko.observable(37);

        self.lineChartData = ko.observableArray([
            lineDataPoint()
        ]);

        self.barChartData = ko.observable(randomPonies());
        self.barChartSmall1 = ko.observable(randomPonies());
        self.barChartSmall2 = ko.observable(randomPonies());

        setInterval(updateBarChartData, 2876);
        setInterval(updateElectionData, 3333);
        setInterval(updateLineChartData, 1500);
    };
}(D3KD));