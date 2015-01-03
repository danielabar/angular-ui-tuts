angular.module('MyApp', ['ui.mask'])
  .controller('MainController', function($scope) {

    $scope.creditCardNumber = '9999 9999 9999 9999';
    $scope.phoneNumber = '(999) (999)-(9999)';
    $scope.postalCode = 'A9A 9A9';
  });