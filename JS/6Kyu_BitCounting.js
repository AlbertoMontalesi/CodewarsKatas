// Write a
// function that takes an(unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

// Example: The binary representation of 1234 is 10011010010, so the
// function should
// return 5 in this
// case


// to count the bit just count the 1s


var countBits = function (n) {
    // transform into binary and split into array
    n = n.toString(2).split("");
    let count = 0;
    // iterate over array
    for (let i = 0; i < n.length; i++) {
        // parse each string into number and add it up
        count += parseInt(n[i]);
    }
    return count;

};



// short better version

// transform into binary, split removing the zeroes, count the length
// as we only have 1s, we can simply count how many 1s we have to know their sum
countBits = n => n.toString(2).split('0').join('').length;