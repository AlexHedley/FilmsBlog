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

                var chartDataCertificates = getChartDataCertificates(response.data);
                setupChartCertificates(chartDataCertificates);
            });
    };

    $scope.init();
});
