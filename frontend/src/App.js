import React, { Component } from 'react';
import './App.css';
const axios = require('axios');


export default class App extends Component {


  constructor(props) {
    super(props);
    this.showerRef = React.createRef();
    this.dateRef = React.createRef();
    this.state = {
      confirm: ""
    }
  }

  res = ()=>{
    axios.post("http://localhost:5000/entry", {
      date: this.dateRef.current,
      showerTime: this.showerRef.current
    }).then((response)=>{
      this.setState({confirm: response})
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.res}>
            <input ref="{this.showerRef}" type="number" min="4" max="10" placeholder="5"/>
            <input ref="{this.dateRef}" type="date" name="Date"/>
            <button type="submit" id="submit">Submit</button>
          </form>
          <p>{this.state.confirm}</p>
        </header>
      </div>
    );
  }

}


