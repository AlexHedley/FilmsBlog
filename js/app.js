var myApp = angular.module('myApp', ['ngSanitize', 'angular.filter']);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.list = [];

    $scope.orderOptions = [
        //{ name:'FilmDate' }, 
        { name:'Stars' },
    ];

    $scope.orderProp = 'Stars';//'FilmDate';
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
            });
    };

    $scope.init();
});

myApp.filter('toDate', function() {
    return function(items) {
      return new Date(items);
    };
});