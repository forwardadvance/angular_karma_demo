angular.module('app', [])
  .controller('myController', function($scope) {
    $scope.hamster = "Hammy";

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.hamster;
    }
  });

// karma requires node
// Node is JavaScript in your command line
//
// karma init
