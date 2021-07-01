import React, { useState } from "react";
import axios from "axios";

const Palindrome = () => {

    const [string, setString] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`/palindrome`, { string: string })
            .then((response) => {
                const success = response.data.success;
                if (success) {
                    setResult(response.data.result);
                }
            })
            .catch((error) => {
                //  Handling the response (Show an error notification etc)
                if (error.response) {
                    // check the status
                    if (error.response.status === 422) {
                    } else if (error.response.status === 401) {
                    }
                }
            });
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label htmlFor="string">Cadena a validar:</label>
                <input
                    id="string"
                    value={string}
                    onChange={e => {setString(e.target.value)}}
                />
                <p>El string escrito es un Palindromo?: {result} </p>
                <button type="submit">Validar Cadena</button>
            </form>
        </div>
    );
};
export default Palindrome;