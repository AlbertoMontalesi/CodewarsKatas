// Complete the solution so that the function will break up camel casing, using a space between words.
//   Example

// solution('camelCasing') // => should return 'camel Casing'

// complete the function
function solution(string) {
  // split the string in individual letters
  return string.split('').map(e => {
    // if the letter is uppercase return it with a space in front of it, otherwise return the letter
    return e === e.toUpperCase() ? (` ${e}`) : e
    // join back all the letters
  }).join('');
}