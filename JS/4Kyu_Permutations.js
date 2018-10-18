// In this kata you have to create all permutations of an input string and remove duplicates,
//   if present.This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

//   permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


function permutations(string) {

  let genPerms = (word, anagram = '', result = []) => {
    // if the word is empty, we popped all the characters, push the anagram to resul and return
    if (!word) {
      result.push(anagram);
      return;
      
    } 

    // loop over each letter
    for (let i = 0; i < word.length; i++){
      // recursively call the function, this time without the letter that we pushed to anagram
      genPerms(word.slice(0,i) + word.slice(i + 1), anagram + word[i], result);
    }
    // use a set to remove duplicates
    return [... new Set(result)];
  } // end genPerms
  
  console.log(genPerms(string));
}

permutations("abcd");


