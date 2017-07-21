import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Filters from './components/Filters'
import HogsList from './components/HogsList'
import hogs from './porkers_data'

class App extends Component {
  state = {
    hogs,
    sortBy: ''
  }

  resetHogs = () => {
    this.setState({
      hogs
    })
  }

  applyGreasedFilter = () => {
    this.setState({
      hogs:this.state.hogs.filter(hog => hog.greased === true)
    })
  }

  handleCheckbox = (event) => {
    if(event.target.checked){
      this.applyGreasedFilter()
    } else {
      this.resetHogs()
    }
  }

  sortByNames = () => {
    this.state.hogs.sort(function (a,b) {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0
    })
  }

  sortByWeight = () => {
    this.state.hogs.sort(function (a,b) {
      if(a.weight < b.weight) return -1
      if(a.weight > b.weight) return 1
      return 0
    })
  }

  handleSort = (event) => {
    this.setState({
      sortBy: event.target.value
    })
    if(event.target.value === 'name'){
      this.sortByNames()
    } else {
      this.sortByWeight()
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <Filters handleSort={this.handleSort} handleCheckbox={this.handleCheckbox} sortBy={this.state.sortBy} />
        <br/>
        < HogsList hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App
