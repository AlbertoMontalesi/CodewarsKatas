// Move the first letter of each word to the end of it, then add "ay"
// to the end of the word.Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !'); // elloHay orldWay !

function pigIt(str) {
    // split string to array
    arr = str.split(" ");
    // loop over the array
    for (var i = 0; i < arr.length; i++) {
        // if the character is a letter then 
        if (arr[i].match(/[a-z]/i)) {
            // store the letter in a temporary variable
            var temp = arr[i].slice(0, 1);
            // cut the string and add the letter to its end, followed by ay
            arr[i] = arr[i].slice(1) + temp + "ay";
        }
    }
    // join back everything
    str = arr.join(" ");
    return str;
}