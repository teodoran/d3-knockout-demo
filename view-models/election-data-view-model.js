/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this,

            getNum = function () {
                return Math.random() * 100
                //return 1;
            };

        self.electionData = ko.observable(37);

        setInterval(function () {
            self.electionData(
                // method call here to change the chart data.
                getNum()
                //Math.random() * 100
            );
        }, 1000);

    };
}(D3KD));