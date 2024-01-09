import React, { useEffect, useState } from 'react'

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    function setResponse(data) {
        console.log("data", data);
        setTasks(data);
        console.log("task", tasks);
    }
    useEffect(() => {
        try {
            fetch('http://localhost:8090/tasks/allTasks?userId=1').then(res => res.json())
            .then(result => setResponse(result))
        } catch (error) {
            console.log("Reported error", error);
        }
        /*const fetchAffirmation = async () => {
          try {
            const response = await fetch('http://localhost:8090/tasks/allTasks?userId=1', {
              headers: {
                Accept: 'application/json',
              },
            });
    
            const result = await response.json();
            console.log('result', result);
            setTasks(result);
            console.log('tasks', tasks);
            
          } catch (error) {
            console.error('Error fetching affirmation:', error);
            
          }
        };
    
        fetchAffirmation();*/
      }, []);
    
    
  return (
    <div>
        <h3>Task List</h3>
        <div>
            {tasks.map((task) => (
                <ul key={task.id}>{task.title}</ul>
            ))}
        </div>
    </div>
    
  )
}

export default TaskList