// Not all functions are imported, be careful 👇
const {
    subtract,
    divide, 
    isDivisibleBy,
    gradeAssignment,
    areaOrPerimeter,
    disemvowel,
    strEndsWith,
    removeUrlAnchor,
    numberToString
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
describe('--- Smoke test ---', () => {
    test('Check that tests are working', () => {
        expect(1).toBeTruthy();
    });
});

// Section A 02. Test the subtraction() function

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
describe('--- Divide() function ---', () => {
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
    });
    
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
});

// Section A 04. Test the isDivisibleBy() function
describe('--- isDivisibleBy() function ---', () => {
    test('Valid requests', () => {
        expect(isDivisibleBy(10,5,2)).toBeTruthy();
        expect(isDivisibleBy(150,30,5)).toBeTruthy();
        expect(isDivisibleBy(5,2.5,1)).toBeTruthy();
        expect(isDivisibleBy(5,1,2.5)).toBeTruthy();
        expect(isDivisibleBy(-3,3,-1.5)).toBeTruthy();
    });

    test('Valid input, invalid requests', () => { // should all be false.
        expect(isDivisibleBy(10,3,1)).toBeFalsy(); // a not a factor
        expect(isDivisibleBy(10,1,3)).toBeFalsy(); // b not a factor
        expect(isDivisibleBy(10,-7,16)).toBeFalsy(); // both not factors
    });

    test('Invalid inputs', () => {
        expect(isDivisibleBy()).toBeFalsy();
        expect(isDivisibleBy(2, 1)).toBeFalsy();
        expect(isDivisibleBy(true,3,-1.5)).toBeFalsy();
        expect(isDivisibleBy(-3,undefined,-1.5)).toBeFalsy();
        expect(isDivisibleBy(-3,3,null)).toBeFalsy();
        expect(isDivisibleBy({},3,-1.5)).toBeFalsy();
        expect(isDivisibleBy(-3,[],-1.5)).toBeFalsy();
        expect(isDivisibleBy(-3,'foobar',-1.5)).toBeFalsy();
    });
});

// Section A 05. Test the areaOrPerimeter() function
describe('--- areaOrPerimiter() function ---', () => {
    test('Valid requests', () => {
        expect(areaOrPerimeter(10,5)).toBe(30);
        expect(areaOrPerimeter(10,10)).toBe(100);
        expect(areaOrPerimeter(0.5,0.5)).toBe(0.25);
        expect(areaOrPerimeter(0.5,3)).toBe(7);
    }); 

    test('Invalid requests', () => {
        expect(() => {
            areaOrPerimeter(-10, 3);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
        expect(() => {
            areaOrPerimeter(10, -3);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
        expect(() => {
            areaOrPerimeter(-10, -3);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
        expect(() => {
            areaOrPerimeter(-10, -10);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
    });

    test('Invalid data types', () => {
        expect(() => {
            areaOrPerimeter();
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter(3);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter(true, 3);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter(4, false);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter([], 3);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter({}, 3);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter(3, null);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter(7, undefined);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            areaOrPerimeter(0, 'hello');
        }).toThrow('Error: At least 1 required parameter is invalid.');
    });
});

// Section A 06. Test the gradeAssignment() function
describe('--- gradeAssignment() function ---', () => {
    test('Valid requests', () => {
        expect(gradeAssignment(90,90,90)).toBe('A');
        expect(gradeAssignment(80,80,80)).toBe('B');
        expect(gradeAssignment(70,70,70)).toBe('C');
        expect(gradeAssignment(60,60,60)).toBe('D');
        expect(gradeAssignment(50,50,50)).toBe('F');
        expect(gradeAssignment(37.5,45.6,98.2)).toBe('D');
        expect(gradeAssignment(100,100,100)).toBe('A');
    });

    test('Invalid requests', () => {
        // negatives
        expect(() => {
            gradeAssignment(-10, 70, 30);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
        expect(() => {
            gradeAssignment(10, -70, 30);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
        expect(() => {
            gradeAssignment(10, 70, -30);
        }).toThrow('Error: At least 1 required parameter was less than zero.');
        // greater than 100
        expect(() => {
            gradeAssignment(101, 70, 30);
        }).toThrow('Error: At least 1 required parameter was higher than 100 percent.');
        expect(() => {
            gradeAssignment(10, 700, 30);
        }).toThrow('Error: At least 1 required parameter was higher than 100 percent.');
        expect(() => {
            gradeAssignment(10, 70, 300);
        }).toThrow('Error: At least 1 required parameter was higher than 100 percent.');
    });

    test('Invalid data types', () => {
        // missing parameters (caught by NaN validation)
        expect(() => {
            gradeAssignment();
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment(1);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment(1, 1);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        // non number data types
        expect(() => {
            gradeAssignment(true, 0, 0);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment(0, false, 0);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment(0, 0, []);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment({}, 0, 0);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment(0, undefined, 0);
        }).toThrow('Error: At least 1 required parameter is invalid.');
        expect(() => {
            gradeAssignment(0, 0, null);
        }).toThrow('Error: At least 1 required parameter is invalid.');
    });
});

// Section A 07. Test the disemvowel() function
describe('--- disemvowel() function ---', () => {
    test('Valid requests', () => {
        expect(disemvowel('aieou')).toBe('');
        expect(disemvowel('Hello World!')).toBe('Hll Wrld!');
        expect(disemvowel('')).toBe('');
        expect(disemvowel('crypt')).toBe('crypt');
        expect(disemvowel('AEIOU')).toBe('');
    });

    test('Invalid requests', () => {
        expect(() => {
            disemvowel()
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel(null)
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel(undefined)
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel(true)
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel(false)
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel([])
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel({})
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            disemvowel(35)
        }).toThrow('Error: Empty or Non-string input.');
    });
});

// Section A 08. Test the removeUrlAnchor() function
describe('--- removeUrlAnchor() function ---', () => {
    test('Valid requests', () => {
        expect(removeUrlAnchor('Hello World!')).toBe('Hello World!');
        expect(removeUrlAnchor('https://www.google.co.uk#hello')).toBe('https://www.google.co.uk');
        expect(removeUrlAnchor('#123#123')).toBe('');
        expect(removeUrlAnchor('123#124')).toBe('123');
    });

    test('Invalid requests', () => {
        expect(() => {
            removeUrlAnchor();
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor(null);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor(undefined);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor(true);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor(false);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor([]);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor({});
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            removeUrlAnchor(35);
        }).toThrow('Error: Empty or Non-string input.');
    });
});

// Section A 09. Test the strEndsWith() function
describe('--- strEndsWith() function ---', () => {
    test('Valid requests', () => {
        expect(strEndsWith('hello', 'ello')).toBeTruthy();
        expect(strEndsWith('PYTHON', 'ON')).toBeTruthy();
        expect(strEndsWith('a£221sdb', '£221sdb')).toBeTruthy();
    });

    test('Invalid requests', () => {
        expect(strEndsWith('hello', 'a')).toBeFalsy();
        expect(strEndsWith('PYTHON', 'ZZZ')).toBeFalsy();
        expect(strEndsWith('a£221sdb', '£')).toBeFalsy();
    });

    test('Invalid data types', () => {
        expect(() => {
            strEndsWith();
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith(null, 'a');
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith('b', undefined);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith(true, 'false');
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith('true', false);
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith([], 'er');
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith('aaaa', {});
        }).toThrow('Error: Empty or Non-string input.');
        expect(() => {
            strEndsWith(35, 'foo');
        }).toThrow('Error: Empty or Non-string input.');
    });
});

// Section A 10. Test the numberToString() function
describe('--- numberToString() function ---', () => {
    test('Valid requests', () => {
        expect(numberToString(10)).toBe('10');
        expect(numberToString(-10)).toBe('-10');
        expect(numberToString(3.14)).toBe('3.14');
        expect(numberToString(-10.6)).toBe('-10.6');
    });

    test('Invalid data types', () => {
        expect(() => {
            numberToString();
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString(null);
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString(undefined);
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString(true);
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString(false);
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString([]);
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString({});
        }).toThrow('Error: Empty or NaN input.');
        expect(() => {
            numberToString('35');
        }).toThrow('Error: Empty or NaN input.');
    });
});