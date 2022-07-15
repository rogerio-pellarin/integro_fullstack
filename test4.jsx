import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Palindrome() {
  const [palindromo, setPalindromo] = useState();
  const [answer, setAnswer] = useState(null);

  const handlerDispath = async () => {
    try {
      await axios.post(`/integro_fullstack/test1.php/${palindromo}`);
      setPalindromo("");
      const resp = await axios.get("/integro_fullstack/test1.php");
      setAnswer(resp.data);
    } catch (error) {
      console.error({ message: error.message });
    }
  };

  useEffect(() => {
    if (answer) alert("The word is palindrome").then(setAnswer(null));
    else if (!answer) alert("The word is not palindrome").then(setAnswer(null));
  }, [answer]);

  return (
    <>
      <form onSubmit={handlerDispath}>
        <input
          type="text"
          onChange={(e) => setPalindromo((palindromo += e.target.value))}
          value={palindromo}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
