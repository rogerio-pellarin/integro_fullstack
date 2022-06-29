import React from 'react';
import axios from 'axios';
import { useState } from "react";

export const App = () => {
    const [palindrome, setPalidrome] = useState("hola");
    const [esPalindrome, setEsPalindrome] = useState(false);
  
    const Click = async () => {
      try {
        const { data } = await axios.post(
          `https://jeanoviedo.com/apis/test1.php?data=${palindrome}`
        );
        setEsPalindrome(data.status);
        console.log(palindrome,data, "palindrome");
      } catch (err) {
        setEsPalindrome(false);
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
        <input type="button" value="axios call" onClick={Click} />
  
        {esPalindrome ? <p>palindrome : true</p> : <p>palindrome : false</p>}
      </>
    );
  };
export default App;