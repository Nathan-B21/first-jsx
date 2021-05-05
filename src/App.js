import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";
import HeloDojo from './components/HeloDojo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <HeloDojo/>
      <TodoList/>
    </div>
  );
}

export default App;
