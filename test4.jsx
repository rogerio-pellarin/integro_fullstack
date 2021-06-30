import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

    state = {
        phrase: '',
    }

    stateResult = '';

    handleChange = event => {
        this.setState({ phrase: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const phrase = {
            phrase: this.state.phrase
        };
        axios.post(`http://127.0.0.1:8001/palindromeAPI/palindrome`, { phrase })
            .then(res => {
                if(res.data.isPalindrome) {
                    alert("Is palindrome");
                }else{
                    alert("Isn't palindrome");
                }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Phrase:
                        <input type="text" name="phrase" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}