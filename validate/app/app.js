angular.module('MyApp', ['ui.validate'])
  .controller('MainController', function($scope) {

    $scope.myCustomValidate = function(value) {
      return value === 'Cookie Monster!';
    };

  });