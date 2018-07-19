// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only
// if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
    // replace dash and underscore with a space and split into array
    str = str.replace(/-|_/g, " ").split(" ");
    // loop over the array
    for (var i = 1; i < str.length; i++) {
        // if the first word is lowercase, leave it like that
        if (str[0] === str[0].toLowerCase()) {
        str[0] = str[0];
        }
        // use regexp to capitalize the other words
        str[i] = str[i].replace(/^\w/, c => c.toUpperCase());
    }
    // join everything back
    return str.join('');
}