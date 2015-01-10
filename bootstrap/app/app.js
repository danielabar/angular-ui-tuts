angular.module('MyApp', ['ui.bootstrap'])
  .controller('MainController', function($scope) {

    $scope.sections = [
      {heading: 'First Dynamic Section', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste, aspernatur quod maxime at facere. Culpa reiciendis, facilis libero dolore.'},
      {heading: 'Second Dynamic Section', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, aliquam.'},
      {heading: 'Third Dynamic Section', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nulla quisquam delectus at voluptate nihil.'}
    ];

  });