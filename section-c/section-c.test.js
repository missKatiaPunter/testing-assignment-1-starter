const {mysteryFunction, mysteryFunction2} = require('./section-c');

describe("Test the first Mystery Function", () => {
    it.skip("Returns either true or false", () => {
        expect(mysteryFunction(0)).toBeFalsy();
        expect(mysteryFunction(1)).toBeFalsy();
        expect(mysteryFunction(2)).toBeTruthy();
        expect(mysteryFunction(3)).toBe(true);
        expect(mysteryFunction(5)).toBe(true);
        expect(mysteryFunction(7)).toBe(true);
        expect(mysteryFunction(11)).toBeTruthy();
        expect(mysteryFunction(73)).toBe(true);
        expect(mysteryFunction(75)).toBe(false);
        expect(mysteryFunction(-1)).toBe(false);
    });
});

describe("Test the second Mystery Function", () => {
    it.skip("Returns a number", () => {
        expect(mysteryFunction2(0)).toBe(1);
        expect(mysteryFunction2(1)).toBe(1);
        expect(mysteryFunction2(2)).toBe(2);
        expect(mysteryFunction2(3)).toBe(6);
        expect(mysteryFunction2(4)).toBe(24);
        expect(mysteryFunction2(5)).toBe(120);
        expect(mysteryFunction2(6)).toBe(720);
        expect(mysteryFunction2(7)).toBe(5040);
        expect(mysteryFunction2(8)).toBe(40320);
        expect(mysteryFunction2(12)).toBe(479001600);
        expect(()=>{
            mysteryFunction2(-1)
        }).toThrow("Out of range!");
        expect(()=>{
            mysteryFunction2(13)
        }).toThrow("Out of range!");
        expect(()=>{
            mysteryFunction2(100)
        }).toThrow("Out of range!");
    });
});