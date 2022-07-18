import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor() {
        super();
        this.state = { palindrome: null, isPalindrome: null}
    }

    handleTextChange(e) {
        this.setState({ palindrome: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.postPalindrome(this.state.palindrome);
    }

    async postPalindrome(palindrome) {
        axios({
            method: 'post',
            url: 'http://localhost:3001/palindrome',
            data: {
                palindrome
            }
        })
        .then((response) => {
            this.setState({isPalindrome: response.data});
        })
        .catch((reason) =>{
            console.log(reason);
        })
        console.log('hola mundo')
    }

    render() {
        const response = (this.state.isPalindrome === true)?'it is palindrome': 'it is not palindrome';
        return (
            <>
                <form action="" onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleTextChange(event)} />
                    <input type="submit" />
                </form>
                <label>Is palindrome: </label><input type="text" readOnly value={(this.state.isPalindrome !== null)?this.state.isPalindrome: ''} />
            </>
        )
    }
}