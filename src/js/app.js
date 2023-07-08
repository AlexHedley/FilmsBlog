var myApp = angular.module('myApp', ['ngSanitize', 'angular.filter']);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.list = [];

    $scope.orderOptions = [
        // { name:'FilmDate' }, 
        { name:'FilmID' },
        { name:'Stars' },
    ];

    $scope.orderProp = '-FilmID'; //'FilmDate'; //'Stars';//
    $scope.setOrder = function (orderProp) {
        //console.debug(orderProp);
        $scope.orderProp = orderProp;
    };

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/data.json';

        $http.get(file)
            .then(function(response) {
                $scope.list = response.data;

                var chartData = getChartData(response.data);
                setupChart(chartData);

                var chartDataStars = getChartDataStars(response.data);
                setupChartStars(chartDataStars);
            });
    };

    getChartData = (data) => {
        var dict = {};
        angular.forEach(data, function(value, key) {
            var year = new Date(value.FilmDate).getFullYear();
            if (dict.hasOwnProperty(year)) {
                dict[year] += 1;
            } else {
                dict[year] = 1;
            }
        });
        // console.log(dict);
        return dict;
    }

    setupChart = (chartData) => {
        Chart.register(ChartDataLabels);

        const options = {
            plugins: {
                datalabels: {
                    color: '#36A2EB'
                }
            }
        }

        const config = {
            type: 'bar',
            data: {
                labels: Object.keys(chartData),
                datasets: [{
                    label: 'Films per year',
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options
        };

        let ctx = $("#chartYear");

        let lineGraph = new Chart(ctx, config);
    };

    
    getChartDataStars = (data) => {
        var dict = {};
        angular.forEach(data, function(value, key) {
            var star = value.Stars;
            if (dict.hasOwnProperty(star)) {
                dict[star] += 1;
            } else {
                dict[star] = 1;
            }
        });
        // console.log(dict);
        return dict;
    }

    setupChartStars = (chartData) => {
        Chart.register(ChartDataLabels);

        const options = {
            plugins: {
                datalabels: {
                    color: '#36A2EB'
                }
            }
        }

        const config = {
            type: 'bar',
            data: {
                labels: Object.keys(chartData),
                datasets: [{
                    label: 'Ratings Count',
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options
        };

        let ctx = $("#chartRating");

        let lineGraph = new Chart(ctx, config);
    };

    $scope.init();
});

myApp.filter('toDate', function() {
    return function(items) {
        return new Date(items);
    };
});