import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from './components/robots.js'
import Card from './components/Card.js'
import Search from './components/Search.js'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      search_string: "",
      filtered_robots: robots
    }
  }

 parent_callback_function=(prop_from_child)=>{
    this.setState({
      search_string: prop_from_child
    },()=>{
      this.setState({
      filtered_robots: robots.filter(robot=>robot.name.toLowerCase().includes(this.state.search_string))
      })
    })

    }
  render(){
    return (
    <div className="App">
    <h1>Our Employees</h1>
    <Search callback_function_from_parent={this.parent_callback_function}/>
    <div className="cardList">
      {
        this.state.filtered_robots.map(robot => 
          <Card key={robot.id} props_from_parent={robot}/>
      )
      }
      </div>
    </div>
  );
  }
}

export default App;
