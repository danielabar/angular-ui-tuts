angular.module('MyApp', ['ngGrid'])
  .controller('MainController', function($scope) {

    // Grid Data
    $scope.superheroes = [
      {other: 10, firstName: 'Tony', lastName: 'Stark', alterEgo: 'Iron Man'},
      {other: 20, firstName: 'Steve', lastName: 'Rogers', alterEgo: 'Captain America'},
      {other: 30, firstName: 'Natasha', lastName: 'Romanoff', alterEgo: 'Black Widow'},
      {other: 40, firstName: 'Bruce', lastName: 'Banner', alterEgo: 'Hulk'},
      {other: 50, firstName: 'Client', lastName: 'Barton', alterEgo: 'Hawkeye'},
      {other: 60, firstName: 'Thor', lastName: 'Odinson', alterEgo: 'Thor'},
      {other: 60, firstName: 'Steve', lastName: 'Foo', alterEgo: 'Thor'},
      {other: 60, firstName: 'Bruce', lastName: 'Foo', alterEgo: 'Thor'},
    ];

    $scope.selected = [];

    // Grid Options
    $scope.gridOpts = {
      data: 'superheroes',
      showGroupPanel: true,
      multiSelect: false,
      selectedItems: $scope.selected,
      columnDefs: [
        {field: 'firstName', displayName: 'First Name'},
        {field: 'lastName', displayName: 'Last Name'}
      ]
    };

  });