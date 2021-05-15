// A02
const subtract = (a,b) => {
    if(typeof(a) != 'number' || typeof(b) != 'number') {
        throw new Error('Error: At least 1 required parameter is not a number');
    }
    return a-b;
};

// A03
const divide = (numerator, denominator) => {
    if (denominator === 0 || typeof(denominator) != 'number' || typeof(numerator) != 'number') {
        throw new Error('Error: At least 1 required parameter is invalid.');
    }
    else {
        return parseFloat(numerator / denominator);
    }
}

// A04
const isDivisibleBy = (number, a, b) => number % a === 0 && number % b === 0;

// A05 - Pay attention to the fact that it is area OR perimeter
const areaOrPerimeter = (l , w) => {
    if (typeof(l) != 'number' || typeof(w) != 'number') {
        throw new Error('Error: At least 1 required parameter is invalid.');
    }

    if (l < 0 || w < 0) {
        throw new Error('Error: At least 1 required parameter was less than zero.');
    }

    switch(l === w) {
        case true:
            return l*w;
        case false:
            return 2*(l+w);
    }
}

// A06
const gradeAssignment = (s1, s2, s3) => {
    if (typeof(s1) != 'number' || typeof(s2) != 'number' || typeof(s3) != 'number') {
        throw new Error('Error: At least 1 required parameter is invalid.');
    }

    if (s1 < 0 || s2 < 0 || s3 < 0){
        throw new Error('Error: At least 1 required parameter was less than zero.');
    }

    if (s1 > 100 || s2 > 100 || s3 > 100){
        throw new Error('Error: At least 1 required parameter was higher than 100 percent.');
    }

    let q=(s1+s2+s3)/3
    if (q>=90){
        return 'A'
    } else if (q>=80) {
        return 'B'
    } else if (q>=70) {
        return 'C'
    } else if (q>=60) {
        return 	'D'
    } else if (q>=0) {
        return 	'F'
    } else {
        return ''
    }
}

// A07
const disemvowel = str => {
    if(typeof(str) != 'string'){
        throw new Error('Error: Empty or Non-string input.');
    }
    return str.replace(/[aeiou]/gi, '');
}
// A08
const removeUrlAnchor = url => {
    if (typeof(url) != 'string'){
        throw new Error('Error: Empty or Non-string input.');
    }
    return url.split('#')[0];
}
// A09
const strEndsWith = (str, ending) => {
    if (typeof(str) != 'string' || typeof(ending) != 'string') {
        throw new Error('Error: Empty or Non-string input.');
    }
    return str.endsWith(ending);
}
// A10
const numberToString = num => {
    if (typeof(num) != 'number'){
        throw new Error('Error: Empty or NaN input.');
    }
    return num.toString();
}
// Not all functions are exported, be careful 👇

module.exports = { 
    subtract,
    divide,
    isDivisibleBy,
    disemvowel,
    areaOrPerimeter,
    gradeAssignment,
    strEndsWith,
    removeUrlAnchor,
    numberToString
};