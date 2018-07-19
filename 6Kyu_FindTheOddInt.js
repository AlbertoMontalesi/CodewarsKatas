// 

function findOdd(A) {
    // create empty array
    var newArr = [];
    // loop over the array
    for (var i = 0; i < A.length; i++) {
        // loop again over the array, keeping one number i as comparison
        for (var j = 0; j < A.length; j++) {
            // if we find a number same as i we copy to another array
            if (A[j] === A[i]) {
                newArr.push(A[j]);
            }
        }
        // if the new array is even we empty it and continue changing the comparison number
        if (newArr.length % 2 === 0) {
            newArr = [];
        } 
        // else we return the number which was the number that appears an odd amount of times
        else {
            return newArr[0];
        }

    }
    return 0;
}



// best version

// a ^ b or A XOR B will filter out the number that repeats until you are left with only one which eventually the odd number
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
