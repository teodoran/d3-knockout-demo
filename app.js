/*global ko*/

var D3KD = this.D3KD || {};

(function () {
    "use strict";
    var dataViewModel = new D3KD.dataViewModel();

    ko.applyBindings(dataViewModel);
}());