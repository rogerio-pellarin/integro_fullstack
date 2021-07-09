import React, { useCallback, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/isPalindrome";

function Palindrome() {
  const [phrase, setPhrase] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const resp = await axios.post(URL, {
          phrase,
        });
        const message = resp.data.isPalindrome
          ? "It is palindrome"
          : "Not Palindrome";
        setMessage(message);
      } catch (e) {
        setMessage(
          "It was not possible to perform this operation, please try again later."
        );
      }
    },
    [phrase, setMessage]
  );

  const handleInput = useCallback(
    (event) => {
      if (event.target) setPhrase(event.target.value);
    },
    [setPhrase]
  );

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Phrase: </label>
      <input
        type="text"
        name="phrase"
        required
        onChange={(event) => handleInput(event)}
      />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Palindrome;
