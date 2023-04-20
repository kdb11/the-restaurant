import React from 'react';
import './Contact.css';

export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type="text" placeholder="Your Name" className='form-input'></input>
                </div>
                <div className='form-group'>
                    <input type="email" placeholder="Email" className='form-input'></input>
                </div>
                <div className='form-group'>
                    <textarea placeholder="Your message" rows="5" className='form-input'></textarea>
                </div>
                <div>
                    <button type="submit" className='btn'>Send a message</button>
                </div>

        </form>
        </div>
    )
};