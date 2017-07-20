import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogsList from './components/HogsList'
import Hogs from './porkers_data'


class App extends Component {

  state = {
    hogs: []
  }

  // componentWillMount(){
  //   fetch('../porkers_data.js')
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .then(res => this.setState({ hogs: res }))
  // }

  componentWillMount() {
    this.setState({
      hogs: Hogs
    })
  }
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsList hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
