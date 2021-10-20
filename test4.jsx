import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

    state = {
        sentence: null,
        status: false,
    }
    
    handleChange = event => {
    this.setState({ sentence: event.target.value });
    }

    handleSubmit = event => {
    event.preventDefault();

    const text = {
        sentence: this.state.sentence
    };

    axios.post(`https://apifunctions/palindrome`, { text })
        .then(res => {
            console.log(res);
            console.log(res.data.response);
            this.setState({
                sentence: null,
                status: res.data.response,
            });
        })
    }
    render() {
        return (
            <>
                <div>
                    <p>{(this.state.sentence == null && this.state.status == true) ? "El texto es un palíndromo!" : "" }</p>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Sentence:
                        <input type="text" name="sentence" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Verify</button>
                    </form>
                </div>
            </>
        ) 
    }
}