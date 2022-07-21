import React from "react";
import axios from "axios";

const Palindrome = () => {
  const [text, setText] = React.useState("");

  const validatePalindrome = (e) => {
    e.preventDefault();
    if (!text) return;

    axios
      .post("https://simulacion/palindrome", {
        input: text,
      })
      .then((response) => {
        alert(text ? "Es palindromo" : "No es palindromo");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={ validatePalindrome }>
      <input
        type="text"
        placeholder="Escribe tu palindromo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Palindrome;
