import React from "react";
import axios from "axios";
import { useState } from "react";
import { useState } from "react";
import axios from "axios";

export const Palindrome = () => {
  const [palindrome, setPalidrome] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handlerClick = async () => {
    try {
      const { data } = await axios.get(
        `https://www.integ.ro/api/v1/get-palindrome/?${palindrome}`
      );
      setIsPalindrome(data);
    } catch (err) {
      setIsPalindrome(false);
      console.error(err);
    }
  };
  return (
    <>
      <input
        value={palindrome}
        onChange={(e) => {
          setPalidrome(e.target.value);
        }}
        type="text"
        name="palindrome"
      />
      <input type="button" value="action" onClick={handlerClick} />

      {isPalindrome ? <p>true</p> : <p>false</p>}
    </>
  );
};
