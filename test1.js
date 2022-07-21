const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

const checkPalindrome = (palindrome) => {
  let re = /[\W_]/g;
  let palindromeLower = removeAccents(palindrome)
    .toLowerCase()
    .replace(re, "");
    console.log(palindromeLower)
  let reverse = palindromeLower.split("").reverse().join("");
  return reverse === palindromeLower;
};

const input =
  "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

console.log(checkPalindrome(input));
