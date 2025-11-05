// calculator.test.js
const calc = require('./calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });
  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
  });
});
//Test case:multiple operations
it('should handle multiple operations correctly',()=>{
expect(calc(2,'+',3,'*',4,'-',1)).toBe(13);
});
//Test case:ignore numbers>1000
it('should ignore numbers bigger than 1000',()=>{
expect(calc(2,'+',1001)).toBe(2);
expect(calc(1000,'+',1001,'*',2)).toBe(1000);

});
//Test case:empty call
it('should throw error for less than 3 arguments',()=>{
expect(()=>calc(5)).toThrow('Invalid input type');
});
//Test case:Division with decimals
it('should handle division resulting in decimal',()=>{
    expect(calc(10,'/',3)).toBeCloseTo(3.333,3);
});
//Test case:when the operator is not a string
it('should throw an error if the operator type is not string',()=>{
   expect(() => calc(1, 5, 6)).toThrow('Invalid input type');
});
//Test case:when all the numbers>1000
it('should return 0 if all numbers>1000 ',()=>{
    expect(calc(10002,'+',5969)).toBe(0);
 });
//Test case:when there is only one number
it('when there is only one number<1000 it should return it ',()=>{
    expect(calc(1001,'+',2000,'*',1000)).toBe(1000);
 });    