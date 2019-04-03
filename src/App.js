import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends Component {
  render() {

    return (

      <div className="App">  
        <div>
          <Tabs list={this.props.DriversDB}/> 
        </div>
      </div>
    );
  }
}

export default App;
