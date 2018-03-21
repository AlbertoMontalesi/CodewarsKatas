// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  // split each word
  x = x.split(" ");
  //  create our variables to store the max value and the word associated with it
  let [max, word] = [0, ""];

  // loop 
  for (let i = 0; i < x.length; i++) {
    // create a temporary value
    // split each word, map over it , grab the charcode of each letter and sum it
    let temp = x[i].length ? x[i].split("").map(a => a.charCodeAt(0) - 96).reduce((a, b) => a + b) : x[i].charCodeAt(0)
    if (temp > max)
      [word, max] = [x[i], temp]
  }
  return word;
}