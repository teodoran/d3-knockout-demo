/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this,

            ponies = function () {
                return [
                    { name: "Rainbow Dash", value: 10 },
                    { name: "Rarity", value: 8 },
                    { name: "Fluttershy", value: 15 },
                    { name: "Pinkie Pie", value: 2 },
                    { name: "Applejack", value: 11 },
                    { name: "Twilight Sparkle", value: 5 }
                ];
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

        self.barChartData = ko.observable(ponies());

    };
}(D3KD));