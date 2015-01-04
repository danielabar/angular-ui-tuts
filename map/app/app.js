function onGoogleReady() {
  var elementToBindAngularTo = document.getElementsByTagName('body')[0];
  var appNameArray = ['MyApp'];
  angular.bootstrap(elementToBindAngularTo, appNameArray);
}

angular.module('MyApp', ['ui.map'])
  .controller('MainController', function($scope) {

    // These are just the required options, there are many more documented at google maps developer site...
    $scope.mapOptions = {
      //43.7068° N, 79.3983° W
      center: new google.maps.LatLng(43.7068, -79.3983),
      zoom: 15
    };

    $scope.addMarker = function(event, params) {
      new google.maps.Marker({
        map: $scope.MyMap,   // see index.html <div class="map" ui-map='MyMap'...
        position: params[0].latLng
      });
    };

  });