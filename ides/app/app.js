angular.module('MyApp', ['ui.codemirror', 'ui.ace'])
  .controller('MainController', function($scope) {

    $scope.cmOpts = {
      lineNumbers: true,
      indentSize: 4,
      tabSize: 4,
      theme: 'base16-dark',
      mode: 'javascript'
    };

    $scope.codeMirrorDefaultContent = 'var foo = "bar";';

    $scope.aceOpts = {
      theme: 'twilight',
      mode: 'html'
    };

    $scope.aceEditorDefaultContent = '<h1>Ace Editor</h1>'

  });