function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc

    // the correctly sorted array should be returned.

    var len = array.length;
    var str = '';
    var index = 0;

    for (var i = 0; i < array.length; i++) {
        // if the current value is an integer store it in our string as a 0
        if (array[i] === 0) {
            str += "0";
        }
        // if it is a string then store it as a 1
        else if (array[i] === '0') {
            str += "1";
        } else
        // if it's neither of those take the current number and put it at a slot index calculated without counting the zeroes
        // [2,2,0,5] becomes [2,2,5];
        {
            
            array[index++] = array[i];
        }
    }

    // loop as many times as many where the 0 and '0' that we found
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        if (str[i] === '0') {
            array[index++] = 0;
        } else {
            array[index++] = '0';
        }

    }
    return array;
}


let arr = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];

removeZeros(arr);
