import React from 'react'
import './FooterComponent.css'

export default function FooterComponent() {
    return (
        <div className='footer-container'>
            <p className='footer-text'>&copy; 2023 Your ToDo List. Crafted with ✏️ and ✔️ by
                <a className='my-github' href="https://github.com/007-Shivam" target='_blank' rel='noreferrer'> Shivam Bhosle</a>.
            </p>
        </div>
    )
}
