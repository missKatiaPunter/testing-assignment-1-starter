// Not all functions are imported, be careful 👇
const {
    subtract,
    divide,
    isDivisibleBy,
    disemvowel,
    numberToString,
    strEndsWith,
    removeUrlAnchor,
    gradeAssignment,
    areaOrPerimeter
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
describe('Section A 01.', () => {
    test("Check all the tests are working", () => {
        expect(1+1).toBe(2);
    });
});

// Section A 02. Test the subtraction() function
// Feel free to delete all of the starter test block and make it better

//describe('Test the ', () => {
    //test("Subtract 2 positive numbers, where the first parameter is larger than the scond one", () => {
        //let num1 = 5;
        //let num2 = 1;
        //var expected = 4;
        //var output = subtract(num1, num2);
    //});
//});

describe('Section A 02. Test the subtraction() function', () => {
    test("Subtract 2 positive numbers, where the first number is larger than the second number", () => {
        expect(subtract(5, 1)).toBe(4);
    });
    test("Subtract 2 positive numbers, where the first number is smaller than the second number", () => {
        expect(subtract(2, 9)).toBe(-7);
    });
    test("Subtract 2 numbers, where the first number is a negetive number", () => {
        expect(subtract(-5, 3)).toBe(-8);
    });
    test("Subtract 2 negetive numbers, where the first number is larger than the second number", () => {
        expect(subtract(-9, -2)).toBe(-7);
    });
    test("Subtract 2 negetive numbers, where the first number is smaller than the second number", () => {
        expect(subtract(-1, -9)).toBe(8);
    });
});

// Section A 03. Test the divide() function
// Feel free to delete all of the starter test block and make it better

it('Should divide numbers and not allow division by 0', () => {

});

// Section A 04. Test the isDivisibleBy() function

// Section A 05. Test the areaOrPerimeter() function

// Section A 06. Test the gradeAssignment() function

// Section A 07. Test the disemvowel() function

// Section A 08. Test the removeUrlAnchor() function

// Section A 09. Test the strEndsWith() function

// Section A 10. Test the numberToString() function