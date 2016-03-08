describe('CalculatorController', function() {
  // Load the module containing MyController
  beforeEach(module('app'));
  var scope;
  // inject the $controller and $rootScope services
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope from $rootScope
    scope = $rootScope.$new();
    // Instantiate the controller
    $controller('CalculatorController', {
      $scope: scope
    });
  }));

  it('should have a zero function', function() {
    expect(scope.zero).toBeDefined();
  });

  it('should zero the values', function() {
    scope.num1 = scope.num2 = 12;
    scope.zero();
    expect(scope.num1).toBe(0);
    expect(scope.num2).toBe(0);
  });
});
