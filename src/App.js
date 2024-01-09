import './App.css';
import AddTask from './component/AddTask';
import TaskList from './component/TaskList';

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList />
      <AddTask />
    </div>
  );
}

export default App;
