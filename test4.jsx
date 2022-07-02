import { useState, useRef } from "react";
import axios from "axios";

const API = "";

const Palindrome = () => {
  const [isPalindrome, setIsPalindrome] = useState(2); // 3 error, 2 none value, 1 true, 0 false
  const text = useRef();

  const handleClick = () => {
    if (text.current.value.trim() !== "") {
      axios
        .post(API, { text: text.current.value })
        .then((response) => setIsPalindrome(+response.data))
        .catch(() => setIsPalindrome(3));
    } else setIsPalindrome(2);
  };
  return (
    <>
      <input ref={text} />
      <button onClick={handleClick}>Check</button>
      {isPalindrome !== 2 && isPalindrome !== 3 && (
        <p>The sentence is {isPalindrome === 0 && "not"} a palindrome</p>
      )}
      {isPalindrome === 3 && <p>Error</p>}
    </>
  );
};

export default Palindrome;
