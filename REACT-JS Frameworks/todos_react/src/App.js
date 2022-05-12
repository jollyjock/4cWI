import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TodoList from './components/TodoList';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      todos: [{
        "id":1,
        "name":"einkaufen",
          "done":false
        },
        {
          "id":2,
          "name":"putzen",
          "done":false
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <TaskAdder/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
