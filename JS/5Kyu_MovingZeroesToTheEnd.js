// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]


var moveZeros = function (arr) {
    // new array to store zeroes
    let zeroArr = [];
    // loop over the array and remove the zeroes, putting them into a different array
    for (let i = arr.length - 1; i--;) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            zeroArr.push(0);
        }
    }
    // spread the two arrays together
    arr = [...arr, ...zeroArr]
    return arr;
}