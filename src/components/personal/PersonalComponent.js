import React, { useState } from 'react';
import TaskComponent from '../task/TaskComponent'
import HeroComponent from '../hero/HeroComponent'


export default function PersonalComponent() {
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
          <h1 className='font-bold text-center todo-title'>Personal</h1>
            <TaskComponent />
          </div>
        </div>
      )}
    </>
  )
}
