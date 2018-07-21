// Complete the
// function scramble(str1, str2) that returns true
// if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower
// case letters will be used(a - z).No punctuation or digits will be included.
// Performance needs to be considered
// Examples
// scramble('rkqodlw', 'world') == > True
// scramble('cedewaraaossoqqyt', 'codewars') == > True
// scramble('katas', 'steak') == > False


function scramble(str1, str2) {
    // sorting them allows us to take in consideration double occurrencies of the same letter
    // as they are the same they will be consequent both in the source and in the example word
    let source = str1.split("").sort();
    let word = str2.split("").sort();
    var i = 0;
    // loop as many times as many letters the word has
    for(var x = 0; i < word.length && x <= source.length; x++) {
        // if the letter match then move forward, increase i and increase x
        // else increase only x
        if(word[i] === source[x]) {
            i++;
        }
    }
   // if all the letters in the word appear in the source the length of x should correspond to the length of the word to match, therefore less or equal to our source
    console.log(x <= source.length);
}

scramble("orkqodlw","woorld");