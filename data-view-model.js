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

            updateBarChartData = function() {
                self.barChartData(randomPonies());
            },

            updateAreaChartData = function () {
                console.log(self.areaChartData()[0]);
            };


        self.barChartData = ko.observable(randomPonies());
        self.barChartSmall1 = ko.observable(randomPonies());
        self.barChartSmall2 = ko.observable(randomPonies());

        self.areaChartData = ko.observableArray([
            {x: 1, y: 100},
            {x: 2, y: 130},
            {x: 3, y: 140},
            {x: 4, y: 150},
            {x: 5, y: 135},
            {x: 6, y: 125},
            {x: 7, y: 110},
            {x: 8, y: 100},
            {x: 9, y: 80},
            {x: 10, y: 70},
            {x: 11, y: 50},
            {x: 12, y: 20}
        ]);

        updateAreaChartData();

        console.log(self.areaChartData()[self.areaChartData().length - 1]);

        setInterval(updateBarChartData, 2000);
    };
}(D3KD));