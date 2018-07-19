// Count the number of Duplicates
// Write a
// function that will
// return the count of distinct
// case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.

// Example "abcde" - > 0# no characters repeats more than once "aabbcde" - > 2# 'a'
// and 'b'
// "aabBcde" - > 2# 'a'
// occurs twice and 'b'
// twice(bandB)
// "indivisibility" - > 1# 'i'
// occurs six times "Indivisibilities" - > 2# 'i'
// occurs seven times and 's'
// occurs twice "aA11" - > 2# 'a'
// and '1'
// "ABBA" - > 2# 'A'
// and 'B'
// each occur twice


function duplicateCount(text) {
    // convert the string to array and lowercase it
    let arr = [...text.toLowerCase()];
    // create a set to store individual values that repeat
    let solution = new Set();
    // loop over the array
    if (arr.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                // if i and j are the same we exclude it as it does not count as character repeating
                if (i !== j && arr[j] === arr[i]) {
                    // if the character repeats, add it to the set
                    solution.add(arr[j]);
                }
            }
        }
        // return the size of the set, how many characters repeat
        return solution.size;

    }
}