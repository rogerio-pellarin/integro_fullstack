import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost/test1.php',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                textInput: this.state.value
            }
        })
            .then((response) => {
                this.setState({ result: response });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Frase palindromo:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {result && <div>result</div>}
            </>

        );
    }
}