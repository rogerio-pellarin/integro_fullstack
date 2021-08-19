import {React, useState} from 'react';
import axios from 'axios';

import './Palindrome.css'

const Palindrome = ()=>{
    const [text, setText] = useState('');
    const [isPalindrome, setIsPalindrome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const inputHandler = (event) => {
        setText(event.target.value);
    }
    const formSubmission = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        // Para hacer una llamada real a un API subí el codigo del test1 a la plataforma autocode
        axios.post('https://juans94.api.stdlib.com/integro-test-palindromo@dev/', { text })
            .then(res => {
                // La respuesta de la API puede ser: "Es palinddromo" o "No es palindromo"
                console.log(res)
                setIsLoading(false);
                setIsPalindrome(res.data);
                 setText('')
            })
            .catch(e => console.log(e));
    }

    const message = <p className="message">{isPalindrome}</p>
    return (
        <div className="palindrome-test">
            <form className="" onSubmit={formSubmission}>
            <div className="form-group">
                <label htmlFor="text">Ingrese la frase:</label>
                <input id="text" onChange={inputHandler} value={text}/>
            </div>
            {isLoading && <p className="message">Esta cargando</p>}
            {isPalindrome && !isLoading && message}
            <button type='submit'>Enviar</button>
        </form>
        </div>
    )
}

export default Palindrome;