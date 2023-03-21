/*eslint-disable*/
import React, { useState, useEffect } from 'react'; 
import { TaskList } from 'components/TaskList';
import { TaskForm } from 'components/TaskForm';

const [taskList, setTaskList] = useState([]);
const [loading, setLoading] = useState(false);
const [newTodo, setNewTodo] = useState('');

useEffect(() => {
    fetchTasks();
  }, []); 

const fetchTasks = () => {
  setloading(true);
  fetch('https://week-7-backend.onrender.com/tasks')
    .then(res => res.json())
    .then(data => setTaskList(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
  }

const handleNewTodoChange = (event) => {
  setNewTodo(event.target.value)
}

const onFormSubmit = (event) => {
  event.preventDefault();

    const options = 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        description: newTodo
    })
  }

  fetch('https://week-7-backend.onrender.com/tasks', options)
    .then(res => res.json())
    .then(() => fetchTasks())
    .finally(() => setNewTodo(''));
}


const App = () => {
  return (
    <div>
      Example project for week 7 🌠
      <TaskList />
    </div>
  )
}