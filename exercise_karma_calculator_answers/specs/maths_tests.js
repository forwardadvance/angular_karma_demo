describe('Maths in the universe', function() {
  it('should be the case that 1 plus 1 is 2', function() {
    expect( 1 + 1 ).toEqual( 2 );
  })

  it('should be the case that 1 plus 1 is not 3', function() {
    expect( 1 + 1 ).not.toEqual( 3 );
  })
});
