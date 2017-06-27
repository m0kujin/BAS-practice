// Reverse a String

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");

// Factorialize a Number
// * with recursion *

function factorialize(num) {
  if (num < 0){
    return -1;
  } else if (num === 0){
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
  return num;
}

factorialize(5);

// Check for Palindromes

function palindrome(str) {
  // Good luck!
  var removeUnwantedChars = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(removeUnwantedChars  , '');

  var revStr = lowRegStr.split('').reverse().join('');

  return lowRegStr === revStr;
}

palindrome("eye");

// Find the Longest Word in a String

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;

  for (var i = 0; i < strSplit.length; i++){
    if (strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Title Case a Sentence

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  return arr.map(function(subArr){
    return Math.max.apply(null, subArr);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return (str.substr(-target.length) === target);
}

confirmEnding("Bastian", "n");
