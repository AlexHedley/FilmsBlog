var myApp = angular.module('myApp', ['ngSanitize', 'angular.filter']);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.list = [];
    $scope.selectedFilm = null;

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

    $scope.range = function (n) {
        return new Array(parseInt(n) || 0);
    };

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/data.json';

        $http.get(file)
            .then(function(response) {
                $scope.list = response.data;
                if ($scope.list.length > 0) {
                    $scope.selectedFilm = $scope.list[0];
                }

                var chartData = getChartData(response.data);
                setupChart(chartData);

                var chartDataStars = getChartDataStars(response.data);
                setupChartStars(chartDataStars);

                var chartDataCertificates = getChartDataCertificates(response.data);
                setupChartCertificates(chartDataCertificates);

                var chartDataCinema = getChartDataCinema(response.data);
                setupChartCinema(chartDataCinema);
            });
    };

    $scope.init();
});
