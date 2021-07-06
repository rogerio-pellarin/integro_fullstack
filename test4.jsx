import React, { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:8000/palindrome';

const Palindrome = () => {
  const [ phrase, setPhrase ] = useState('');
  const [ palindrome, setPalindrome ] = useState('');
  
  const changePhrase = (event) => {
    setPhrase(event.target.value);
  }
  
  const verify = async () => {
    if(phrase.length > 1) {
      const response = await axios.post(URL, {
        phrase: phrase
      });
      
      if (response.data.isPalindrome) {
        setPalindrome('The phrase is a Palindrome');
      } else {
        setPalindrome('The phrase is not a Palindrome');
      }
    } else {
      alert('Insert text to verify');
    }
  }

  return (
    <React.Fragment>
      <form>
        <input name='phrase' onChange={changePhrase} value={phrase} />
        <button onClick={verify}>
          Verify
        </button>
      </form>
      {palindrome !== '' ? palindrome : ''}
    </React.Fragment>
  );
}

export default Palindrome;
