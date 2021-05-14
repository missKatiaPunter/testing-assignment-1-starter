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

    test('At least one parameter is blank', () => {
        expect(() => {
            subtract(null, -4);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(-4, null);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract();
        }).toThrow('Error: At least 1 required parameter is not a number');
    });

    test('At least one parameter is NaN', () => {
        expect(() => {
            subtract('foo', 4);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(4, 'bar');
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract('foo', 'bar');
        }).toThrow('Error: At least 1 required parameter is not a number');
    });

    test('At least one parameter is a boolean', () => {
        expect(() => {
            subtract(true, -4);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(-4, true);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(false, -4);
        }).toThrow('Error: At least 1 required parameter is not a number'); 

        expect(() => {
            subtract(-4, false);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(true, false);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(false, true);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(true, true);
        }).toThrow('Error: At least 1 required parameter is not a number');

        expect(() => {
            subtract(false, false);
        }).toThrow('Error: At least 1 required parameter is not a number');
    });

    test('Invalid datatype inputted', () => {
        expect(() => {
            subtract({}, 4);
        }).toThrow('Error: At least 1 required parameter is not a number');
        expect(() => {
            subtract(undefined, 4);
        }).toThrow('Error: At least 1 required parameter is not a number');
        expect(() => {
            subtract("", 4);
        }).toThrow('Error: At least 1 required parameter is not a number');
        expect(() => {
            subtract(null, 4);
        }).toThrow('Error: At least 1 required parameter is not a number');
    });

});

// Section A 03. Test the divide() function
// Feel free to delete all of the starter test block and make it better
describe('--- Divide() function ---', () => {
    test('Divide by 0', () => {
        expect(() => {
            divide(1, 0);
        }).toThrow('Error: At least 1 required parameter is invalid.');
    });

    test('Invalid data types', () => {
        expect(() => {
            divide(true, 3);
        }).toThrow('Error: At least 1 required parameter is invalid');
        expect(() => {
            divide(4, false);
        }).toThrow('Error: At least 1 required parameter is invalid');
        expect(() => {
            divide([], 3);
        }).toThrow('Error: At least 1 required parameter is invalid');
        expect(() => {
            divide({}, 3);
        }).toThrow('Error: At least 1 required parameter is invalid');
        expect(() => {
            divide(3, null);
        }).toThrow('Error: At least 1 required parameter is invalid');
        expect(() => {
            divide(7, undefined);
        }).toThrow('Error: At least 1 required parameter is invalid');
        expect(() => {
            divide(0, 'hello');
        }).toThrow('Error: At least 1 required parameter is invalid');
    });

    test('Valid divison operations', () => {
        expect(divide(5, 1)).toEqual(5); // larger numerator
        expect(divide(1, 5)).toEqual(0.2); // larger denominator
        expect(divide(300, 300)).toEqual(1); // equal
        expect(divide(-5, 2)).toEqual(-2.5); // negative numerator
        expect(divide(2, -5)).toEqual(-0.4); // negative denominator
        expect(divide(-3, -6)).toEqual(0.5); // both negative
        expect(divide(26.4, 4)).toEqual(6.6); // decimal numerator
        expect(divide(3, 1.5)).toEqual(2); // decimal denominator
        expect(divide(2.4, 1.2)).toEqual(2); // both decimal
    })
});

// Section A 04. Test the isDivisibleBy() function

// Section A 05. Test the areaOrPerimeter() function

// Section A 06. Test the gradeAssignment() function

// Section A 07. Test the disemvowel() function

// Section A 08. Test the removeUrlAnchor() function

// Section A 09. Test the strEndsWith() function

// Section A 10. Test the numberToString() function