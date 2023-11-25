import React, { useState } from 'react';
import './WorkComponent.css';
import HeroComponent from '../hero/HeroComponent';
import TaskComponent from '../task/TaskComponent';


export default function WorkComponent() {
  
  const [activeComponent, setActiveComponent] = useState(null);

  const handleTaskTypeClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <HeroComponent />;
      default:
        return null;
    }
  };

  

  return (
    <>
      {activeComponent ? (
        renderActiveComponent()
      ) : (
        <div className='flex justify-end'>
          <div className='the-button'>
            <button className='back' >
              <span className='back-icon' onClick={() => handleTaskTypeClick('home')}>&#8629;</span>
            </button>
          </div>

          <div className='ml-auto the-container'>
          <h1 className='font-bold text-center todo-title'>Work</h1>
            <TaskComponent />
          </div>
        </div>
      )}
    </>
  );
}
