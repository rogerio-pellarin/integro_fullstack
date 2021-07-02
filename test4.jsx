import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: '', result: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.isPalindrome(this.state.text)) { // is True result API
      this.setState({result: 'It is Palindrome'});
    }else {
      this.setState({result: 'Not Palindrome'});
    }

  }

  isPalindrome(text) {
    const formData = new FormData()
    formData.append('text', text)

    const response = await axios({
        url: 'https://prueba.mprieto.com/api/ispalindrome',
        method: 'POST',
        data: formData
    })

    return response;
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
              <label>
                  Text:
                  <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
              </label>
              <input type="submit" value="Submit" />
          </form>

          <p>{this.state.result}</p>          
      </div>
    )
  }
}