// Not all functions are imported, be careful 👇
const {
    subtract,
    divide, 
    isDivisibleBy,
    gradeAssignment,
    areaOrPerimeter
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
describe('--- Smoke test ---', () => {
    test('Check that tests are working', () => {
        expect(1).toBeTruthy();
    });
})

// Section A 02. Test the subtraction() function
// Feel free to delete all of the starter test block and make it better

describe('--- Subtraction() function --- ', () => {
    test('Subtract 2 positive numbers, where the first parameter is larger than the second one', () => {

        expect(subtract(5, 1)).toEqual(4);
    });

    test('Subtract 2 positive numbers, where the second parameter is larger than the first one', () => {
        expect(subtract(1, 5)).toEqual(-4);
    });

    test('Subtract 1 positive, 1 negative number, where the first parameter is the negative number.', () => {
        expect(subtract(-4, 3)).toEqual(-7);
    });

    test('Subtract 1 positive, 1 negative number, where the second parameter is the negative number.', () => {
        expect(subtract(4, -3)).toEqual(7);
    });

    test('Subtract 2 negative numbers, result < 0.', () => {
        expect(subtract(-7, -3)).toEqual(-4);
    });

    test('Subtract 2 negative numbers, result > 0.', () => {
        expect(subtract(-3, -4)).toEqual(1);
    });   

    test('First parameter is a blank', () => {
        expect(() => {
            subtract(null, -4);
        }).toThrow('Error: At least 1 required parameter is blank');
    });

    test('Second parameter is a blank', () => {
        expect(() => {
            subtract(-4, null);
        }).toThrow('Error: At least 1 required parameter is blank');
    });

    test('Both parameters are blank', () => {
        expect(() => {
            subtract();
        }).toThrow('Error: At least 1 required parameter is blank');
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