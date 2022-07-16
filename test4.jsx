import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
const URL= 'http://localhost:8080/api/palindrome' 

export default function App() {
  const [word, setWord] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setWord(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios.post(URL,{word}).then(res=>setConfirm(res.data.isPalindrome)).catch(error=>setError(error))
    
  };

  const handleReset = () => {
    serConfirm(false);
    setWord('');

  };

  return (
    <div>
    <form onSubmit={handleClick}>
      <label htmlFor="palindromo" className="register__label">
        Palindromo?
        <br />
        <input
          type="text"
          id="palindromo"
          name="palindromo"
          placeholder="ingrese la frase"
          onChange={handleChange}
          required
        />
      </label>
      <div>
        <button type="submit">
          Confirmar
        </button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </div>
    </form>
      <div>
        {!error > 0 && (
          <div>
            {confirm ? <p>Si es palindromo</p> : <p>No es palindromo</p>}
          </div>
        )}
        {error && <p>
            {error}
        </p>}
      </div>
    </div>
  );
}