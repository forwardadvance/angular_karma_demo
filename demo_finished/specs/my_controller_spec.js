// Karma
// describe
// it
// expect
// toBe
// not
// toEqual
// beforeEach
// toBeDefined

describe('Unit: MyController', function() {

  // it('should do nicely', function() {
  //   expect({}).toEqual({});
  // })

  // Load the module with MyController
  beforeEach(module('app'));

  var scope;
  // inject the $controller and $rootScope services
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope from $rootScope
    scope = $rootScope.$new();
    // Instantiate the controller
    $controller('myController', {
      $scope: scope
    });
  }));

  it('should have a hamster', function() {
    expect(scope.hamster).toBeDefined();
  });

  it('should say hello to Hammy', function() {
    scope.sayHello();
    expect(scope.greeting).toBe('Hello Hammy');
  });

  it('should say hello to Marty', function() {
    scope.hamster = "Marty";
    scope.sayHello();
    expect(scope.greeting).toBe('Hello Marty');
  });

});


  // // Load the module with MyController
  // beforeEach(module('app'));


  // var scope, ctrl;
  // // inject the $controller and $rootScope services
  // beforeEach(inject(function($controller, $rootScope) {
  //   // Create a new scope from $rootScope
  //   scope = $rootScope.$new();
  //   // Instantiate the controller
  //   ctrl = $controller('myController', {
  //     $scope: scope
  //   });
  // }));

  // it('should work wonderfully', function() {
  //   expect(1+1).toBe(2)
  // })





// Initial State
// describe('Unit: MyController', function() {

// });
