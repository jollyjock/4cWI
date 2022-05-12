import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskAdder/>
      <TodoList/>
    </div>
  );
}

export default App;
