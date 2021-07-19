import React, { useState } from "react";
import axios from "axios";

const Palindrome = () => {
  const [isPalindrome, setIsPalindrome] = useState(false);
  const [palindromeInput, setPalindromeInput] = useState("");

  const handleButton = (e) => {
    e.preventDefault();
    axios.post(`./test3.php`, { input: palindromeInput })   
      .then((response) => {
        response && setIsPalindrome(response.data.palindrome)
      })
      .catch((error) => {
        console.log(error);
      });
};

  return (
    <div>
      <h3 htmlFor="string">Set your palindrome</h3>
      <input
          id="string"
          value={palindromeInput}
          onChange={e => {setPalindromeInput(e.target.value)}}
      />
      <p> Your text is { !isPalindrome && 'not' } a palindrome</p>
      <button onClick={handleButton}>Test</button>
    </div>
  );
};
export default Palindrome;