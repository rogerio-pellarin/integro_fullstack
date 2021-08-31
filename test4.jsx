import React, {useState} from 'react';
import axios from 'axios';

const QueryForm = props => {
  const [string, setString] = useState('');

  const handleInput = e => setString(e.target.value);

  const handleClick = () => props.onCheck(string);

  return <>
    <input type="text" value={string} onChange={handleInput}/>
    <button onClick={handleClick}>Check palindrome</button>
  </>
}

const Palindrome = () => {
  const handleCheckPalindrome = string => {
    axios.post('https://example.com/isPalindrome/', {string: string}).then(response => {
      if(response.data.isPalindrome) {
        console.log(`${string} is a palindrome!`);
      } else {
        console.log(`${string} is NOT a palindrome!`);
      }
    }).catch(error => {
      console.log("There is an error, please try latter", error);
    }).finally(() => {
      console.log("Thanks for using our palindrome service")
    });
  }

  return <>
    <QueryForm onCheck={handleCheckPalindrome}/>
  </>
}

export default Palindrome;
