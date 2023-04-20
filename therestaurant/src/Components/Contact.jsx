import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'

export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        //alert("Thanks for your message\nWe will replay to you as fast as we can!")
        Swal.fire(
            'Thanks for your message!',
            'We will contact you as fast as we can',
            'success'
          );
    };

    return ( 
        <div className='form-box'>
             { <div className='background-image'>
                <img src='https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80' alt='chickenburger'></img>
                <img src='https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80' alt='chef'></img>
                <img src='https://images.unsplash.com/photo-1571168136613-46401b03904e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80' alt='restaurant'></img>
             </div> }
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
                    <button type="submit" onClick={handleClick} className='btn'>Send a message</button>
                </div>

        </form>
        </div>
    )
};