import React, { Component } from 'react';
import './App.css';
const axios = require('axios');


export default class App extends Component {


  constructor() {
    super();
    this.showerRef = React.createRef();
    this.dateRef = React.createRef();
    this.state = {
      confirm: ""
    }
  }

  res = ()=>{
    axios.post("http://localhost:5000/"+this.dateRef.current.value+'/'+this.showerRef.current.value).then((response)=>{
      this.setState({confirm: response})
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input ref="{this.showerRef}" type="number" min="4" max="10" placeholder="5"/>
            <input ref="{this.dateRef}" type="date" name="Date"/>
            <button type="reset" onClick={this.res} id="submit">Submit</button>
          </form>
          <p>{this.state.confirm}</p>
        </header>
      </div>
    );
  }

}


