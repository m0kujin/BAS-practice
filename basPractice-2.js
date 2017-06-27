// Repeat a String Repeat a String
// * with recursion *
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0){
    return "";
  } if (num === 1){
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

// Truncate a String

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
	arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  return arr[1].toLowerCase().split('').every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

mutation(["hello", "hey"]);

// Falsy Bouncer
// Remove all falsy values from an array.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([40, 60], 50);

// Caesars Cipher
/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) { // LBH QVQ VG!
  var rotCharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
