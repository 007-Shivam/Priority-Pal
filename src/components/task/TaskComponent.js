import React, { useState } from 'react';
import './TaskComponent.css'

export default function TaskComponent() {
    const [formClicked, setFormClicked] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleButtonClick = () => {
        if (taskInput.trim() !== '') {
            setFormClicked(true);
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
        else {
            window.alert('Please enter a task !!!');
        }
    };

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);

        if (updatedTasks.length === 0) {
            setFormClicked(false);
        }
    };

    const handleCompleteTask = (index) => {
        if (!tasks[index].includes(' -Completed')) {
            const updatedTasks = [...tasks];
            updatedTasks[index] += ' -Completed';
            setTasks(updatedTasks);
        }
    };

    const handleRemoveCompleted = (index) => {
        const updatedTasks = tasks.filter((task) => !task.includes('-Completed'));
        setTasks(updatedTasks);

        if (updatedTasks.length === 0) {
            setFormClicked(false);
        }
    };

    const handleDeleteAll = () => {
        setTasks([]);
        setFormClicked(false);
    };

    return (
        <>
            <div className='flex justify-center form'>
                <input
                    className='todo-input'
                    placeholder='Enter your Task'
                    value={taskInput}
                    onChange={handleInputChange}
                />
                <button
                    className='bg-green-500 add-btn hover:bg-white'
                    onClick={handleButtonClick}
                >
                    <span className='add'>&#43;</span>
                </button>
            </div>

            {formClicked && (
                <div>
                    <div className='flex justify-center two-btns'>
                        <button className='ml-10 mr-20 remove-btn' onClick={handleRemoveCompleted}>Remove Completed</button>
                        <button className='ml-10 mr-10 delete-btn' onClick={handleDeleteAll}>Delete All</button>
                    </div>

                    <div className='grid justify-center all-tasks'>
                        {tasks.map((task, index) => (
                            <div className='tasks' key={index}>
                                <div className='flex p-3'>
                                    <div className='description'>
                                        <p>{task}</p>
                                    </div>
                                    <button className='mr-3 bg-green-500 hover:bg-white completed' onClick={() => handleCompleteTask(index)}>
                                        <span className='font-bold completed-icon'>&#x2713;</span>
                                    </button>
                                    <button className='ml-3 bg-red-500 hover:bg-white delete' onClick={() => handleDeleteTask(index)}>
                                        <i className="font-bold fa fa-remove delete-icon"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
