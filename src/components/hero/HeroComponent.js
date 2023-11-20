import React, { useState } from 'react';
import './HeroComponent.css'

import WorkComponent from '../work/WorkComponent'
import PersonalComponent from '../personal/PersonalComponent'
import LifeComponent from '../life/LifeComponent'


import Work from '../../assets/work.jpg'
import Personal from '../../assets/personal.jpg'
import Life from '../../assets/life.png'


export default function HeroComponent() {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleTaskTypeClick = (component) => {
        setActiveComponent(component);
    };

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'work':
                return <WorkComponent />;
            case 'personal':
                return <PersonalComponent />;
            case 'life':
                return <LifeComponent />;
            default:
                return ('/');
        }
    };

    return (
        <>
            {activeComponent ? (
                renderActiveComponent()
            ) : (
                <div>
                    <h4>Welcome to Priority Pal</h4>

                    <div className='all'>
                        <div className='task-types work' onClick={() => handleTaskTypeClick('work')}>
                            <img className='task-logo' src={Work} alt='work' />
                            <p className='task-name'>Work</p>
                            <p className='total-tasks'>5 tasks</p>
                        </div>

                        <div className='task-types personal' onClick={() => handleTaskTypeClick('personal')}>
                            <img className='task-logo' src={Personal} alt='personal' />
                            <p className='task-name'>Personal</p>
                            <p className='total-tasks'>5 tasks</p>
                        </div>

                        <div className='task-types life' onClick={() => handleTaskTypeClick('life')}>
                            <img className='task-logo' src={Life} alt='life' />
                            <p className='task-name'>Life</p>
                            <p className='total-tasks'>5 tasks</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
