import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const options = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ email: "rafael@laboratoria.la", password: "banana" })
    };
  
    fetch("https://peaceful-badlands-98440.herokuapp.com/login", options)
       .then(res => res.json())
       .then(data => console.log(data));
  }

  handleClick() {
    const options = {
      method: 'get',
      credentials: 'include',
    };
    fetch('https://peaceful-badlands-98440.herokuapp.com/artists', options)
    .then(res => res.json())
    .then(data => console.log(data));
  }
  render() {
    return (
      <div className="App">
        <Card>
          <h1>Olar</h1>
        </Card>
        <Card>
          <h1>Coé?</h1>
          <button onClick={this.handleClick}>Pegar os artistas</button>
        </Card>
      </div>
    );
  }
}

export default App;
