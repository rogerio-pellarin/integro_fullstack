import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.validatePalindrome = this.validatePalindrome.bind(this);
    }

    validatePalindrome(event){
        axios.post('test1.php' , {
            word: this.state.value
        }).then(res => {
            if(res.data){
                alert("Es palindromo")
            }else{
                alert("No es palindromo")
            }
        })
    }

    handleChange(e){
        this.setState({word: e.target.value})
    }

    render() {
        return (
            <>
                <div>
                    <input type="text" value={this.state.word} onChange={this.handleChange}/>
                    <button onClick={this.validatePalindrome}>Validar</button>
                    <span></span>
                </div>
            </>
        )
    }
}