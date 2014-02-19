/*global ko, setInterval*/

var D3KD = this.D3KD || {};

(function (namespace) {
    "use strict";
    namespace.dataViewModel = function() {
        var self = this;

        self.electionData = ko.observable(37);

        self.updateElectionData = function () {
            return self.electionData(Math.random() * 100);
        };

        setInterval(updateElectionData(), 1000);

    };
}(D3KD));