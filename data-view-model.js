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

            randomBros = function () {
                return [
                    { name: "Kiro", value: Math.random() },
                    { name: "Steffen", value: Math.random() },
                    { name: "Teodor", value: Math.random() },
                    { name: "Peter", value: Math.random() }
                ];
            },

            updateBarChartData = function() {
                self.barChartData(randomPonies());
            };


        self.barChartData = ko.observable(randomPonies());

        self.barChartSmall1 = ko.observable(randomPonies());
        self.barChartSmall2 = ko.observable(randomPonies());

        setInterval(updateBarChartData, 2000);
    };
}(D3KD));