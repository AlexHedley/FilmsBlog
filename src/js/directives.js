// Directives
myApp.directive('cinemaBillboard', function () {
    return {
        restrict: 'E',
        scope: {
            film: '='
        },
        templateUrl: 'templates/cinema-billboard.html'
    };
});
