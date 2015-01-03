angular.module('MyApp', ['ngRoute', 'ui.route'])

  .config(function($routeProvider, $locationProvider) {
    // Simple configuration, just one route
    $routeProvider.otherwise({
      templateUrl: 'main.html',
      controller: 'MainController'
    });

    // Don't use hash in urls
    $locationProvider.html5Mode(true);
  })

  .controller('MainController', function($scope) {
    // Just for demo purposes, wouldn't normally manually create an array of routes like this
    $scope.routes = ['/route-1', '/route-2', '/route-3'];
  });