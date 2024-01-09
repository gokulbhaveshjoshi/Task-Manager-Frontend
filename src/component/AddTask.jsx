import React, { useState } from 'react'

const AddTask = () => {
    const [task, setTask] = useState({
        "userId": "1",
        "title": "Testing tile",
        "category": "test",
        "status": "in progess"
    });
    function saveTask() {
        console.log(task);
        const url = 'http://localhost:8090/tasks/createTask'
        var myRequest = new Request(url, { method: 'POST', body: JSON.stringify(task), headers: {
            'Content-Type': 'application/json',
          }, });
        
        fetch(myRequest).then(function (response) {
            alert('Res' + response);
        }).then(function (response) {
            alert('Blank' + response);
        })
            .catch(function (error) {
                alert('Error' + error);
            });
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setTask((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    return (
        <div>
            <h3>Add Task</h3>
            <div>
                <input name='title' type='text' placeholder='Enter a title' max='50' onChange={handleChange} />
                <input name='status' type='text' placeholder='Nothing at time' onChange={handleChange} />
                <button title='Save Task' onClick={saveTask} >Save Task</button>
            </div>
        </div>
    )
}

export default AddTask