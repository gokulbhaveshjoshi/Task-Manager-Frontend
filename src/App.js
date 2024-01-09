import './App.css';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';
import Navigation from './component/navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <h1>Task Manager</h1>
      <TaskList />
      <AddTask />
    </div>
  );
}

export default App;
