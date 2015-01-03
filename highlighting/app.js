angular.module('MyApp', ['ngSanitize', 'ui.highlight'])
  .controller('MainController', function($scope) {
    $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit, cumque ducimus beatae. Alias dicta vero amet, explicabo autem deleniti aspernatur atque, nihil quaerat dignissimos aliquid. Nisi veritatis delectus obcaecati sequi, exercitationem. Architecto praesentium ipsum, quis necessitatibus consequatur omnis quidem, aperiam repellat ducimus minus qui minima aliquid perspiciatis non nemo.';
    $scope.clearSearch = function() {
      $scope.query = "";
    }
  });