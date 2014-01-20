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
            },

            updateElectionData = function(){
                return self.electionData( Math.random()*100 );
            },

            addLineDataPoint = function(){
                return self.lineChartData.push({date: new Date(), close: Math.random()*1000+500})
            }
            ;


        self.demoData = ko.observable([
            { name: "Kiro", value: 3 },
            { name: "Hans", value: 5 }
        ]);
        //console.log(self.demoData());

        self.electionData = ko.observable(
            37
        );

        // linchart stuffs
        var parseDate = d3.time.format("%d-%b-%y").parse;
        var currentTime = new Date()
        console.log(currentTime);
        self.lineChartData = ko.observableArray([
            {date: new Date(), close: Math.random()*100}
            ]
        );
        self.lineChartData1 = ko.observable(
            [
                {date: parseDate("1-May-14"), close: 282.13},
                {date: parseDate("30-Apr-14"), close: 383.98},
                {date: parseDate("27-Apr-14"), close: 303.00},
                {date: parseDate("26-Apr-14"), close: 207.70},
                {date: parseDate("25-Apr-14"), close: 410.00},
                {date: parseDate("24-Apr-14"), close: 460.28},
                {date: parseDate("23-Apr-14"), close: 371.70},
                {date: parseDate("20-Apr-14"), close: 472.98},
                {date: parseDate("19-Apr-14"), close: 587.44},
                {date: parseDate("18-Apr-14"), close: 408.34},
                {date: parseDate("17-Apr-14"), close: 628.70},
                {date: new Date(), close: 400.13},
                {date: new Date(), close: 280.13}
            ]
        );

        self.barChartData = ko.observable(randomPonies());

        self.barChartSmall1 = ko.observable(randomBros());
        self.barChartSmall2 = ko.observable(randomPonies());

        setInterval(updateBarChartData, 2000);
        setInterval(updateElectionData, 2000);
        setInterval(addLineDataPoint, 2000);
    };
}(D3KD));