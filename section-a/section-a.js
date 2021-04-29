// A02
const subtract = (a,b) => {
    if(!a || !b){ // Verify the parameters are not empty / blank
        throw new Error('Error: At least 1 required parameter is blank');
    }
    if(isNaN(a) === true || isNaN(b) === true){ // Check both parameters are numbers
        throw new Error('Error: At least 1 required parameter is not a number');
    }
    return a-b;
};

// A03
const divide = (numerator, denominator) => {
    if (denominator === 0 || isNaN(denominator)) {
        throw new Error('The value ${denominator} cannot be used as the denominator');
    }
    else {
        return parseFloat(numerator / denominator);
    }
}

// A04
const isDivisibleBy = (number, a, b) => number % a === 0 && number % b === 0;

// A05 - Pay attention to the fact that it is area OR perimeter
const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);

// A06
const gradeAssignment = (s1, s2, s3) => {
    let q=(s1+s2+s3)/3
    if (q>=90){
        return 'A'
    } else if (q>=80) {
        return 'B'
    } else if (q>=70) {
        return 'C'
    }else if (q>=60) {
        return 	'D'
    } else if (q>=0) {
        return 	'F'
    } else {
        return ''
    }
}

// A07
const disemvowel = str => str.replace(/[aeiou]/gi, '');

// A08
const removeUrlAnchor = url => url.split('#')[0];

// A09
const strEndsWith = (str, ending) => str.endsWith(ending);

// A10
const numberToString = num => num.toString();

// Not all functions are exported, be careful 👇

module.exports = { 
    subtract,
    divide,
    isDivisibleBy,
    disemvowel
};