const checkPalindrome = palindrome => {
    let re = /[\W_]/g;
    let palindromeLower = palindrome.toLowerCase().replace(re, '');
    let reverse = palindromeLower.split('').reverse().join(''); 
    return reverse === palindromeLower;
}

const input = "Alli por la tropa portado, traido a ese paraje de maniobras, una tipa como capitan usar boina me dejara, pese a odiar toda tropa por tal ropilla";

console.log(checkPalindrome(input))
