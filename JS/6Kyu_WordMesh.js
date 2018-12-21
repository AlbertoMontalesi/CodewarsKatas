// You will be given an array of strings.The words in the array should mesh together where the last few letters of one word will have the same letters( in the same order) as the next word in the array.But, there are times when all the words won 't mesh.

// If all the words in the given array mesh together, then your code should
// return the meshed letters in a string.

// You won 't know how many letters the meshed words have in common, but it will be at least one.

// If all the words don 't mesh together, then your code should return "failed to mesh".

// Example of a successful mesh:

//   Given the following array:

//   ["allow", "lowering", "ringmaster", "terror"]

// Your code should
// return "lowringter"
// because:

//   the letters "low" in the first two words mesh together
// the letters "ring" in the second and third word mesh together
// the letters "ter" in the third and fourth words mesh together.
// An example of words that don 't mesh together would be this array:

// ["kingdom", "dominator", "notorious", "usual", "allegory"]

// Although the words "dominator"
// and "notorious"
// share letters in the same order, the last letters of the first word don 't mesh with the first letters of the second word. So, your code would return "failed to mesh".

// Input: An array of strings.

// Output: Either a string of letters that mesh the words together or the string "failed to mesh".


function wordMesh(arr) {
  let mesh = "";
  let meshPart;
  let failure;
  for (let i = 0; i < arr.length - 1; i++) {
    // reset the partial
    meshPart = "";
    const word = arr[i];
    const nextWordIndex = 1 + i;
    // loop and compare the words
    for (let j = 0; j < word.length; j++) {
      let firstSubWord = word.substr(j, word.length);
      let secondSubWord = arr[nextWordIndex].substr(0, word.length - j)
      if (firstSubWord === secondSubWord) {
        meshPart = firstSubWord
        j = word.length
      }
    }
    if (!meshPart) {
      failure = true;
    } else {
      mesh += meshPart;
    }


  }
  if (failure) {
    return 'failed to mesh'
  } else {
    return mesh
  }
}


wordMesh(['landscapes',
  'smear',
  'article',
  'cleveland',
  'landscape',
  'aperture',
  'urethane',
  'nebula',
  'latitude'
]);
