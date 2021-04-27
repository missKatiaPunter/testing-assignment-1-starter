// B11
const largestValue = arr => {
    let max = arr[0];
    for (let val of arr) {
        if (val > max) {
            max = val;
        }
    }
    return max;
}

// B12 
function getEven(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

// B13 Test with toHaveProperty
const houseForSale = () => {
    return {
        bath: true,
        bedrooms: 4,
        kitchen: {
            amenities: ['oven', 'stove', 'washer'],
            area: 20,
            'nice.oven': true
        }
    }
}

// B14
const sortNumbers = nums => nums !== null ? nums.sort((a,b) => a-b) : [];

// B15
function countCharsInString (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

// Not all functions are exported, be careful 👇
module.exports = {
    largestValue,
    getEven,
    houseForSale
};