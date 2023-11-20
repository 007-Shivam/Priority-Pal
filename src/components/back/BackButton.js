import React, { useState } from 'react';
import './BackButton.css'

import HeroComponent from '../hero/HeroComponent';


export default function BackButton() {
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
                <div>
                    <button className='back' onClick={() => handleTaskTypeClick('home')}>
                        <span className='back-icon'>&#8629;</span>
                    </button>
                </div>
            )}
        </>
    )
}
