import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'

export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        Swal.fire(
            'Thanks for your message!',
            'We will contact you as fast as we can',
            'success'
          );
    };

    return ( 
    <div className='contactContainer'>
        <img className='contactImg' src='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80' alt='seaFood'></img>
        <div className="contactCard">
            <div className="contactCard-content">
                <div id="card-title">
                <h2>Contact us</h2>
                <br />
                <div className="underline-title"></div>
                </div>
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
                    <div className="buttonContainer">
                        <button id="submit-btn" type="submit" onClick={handleClick} className='btn'>Send a message</button>
                    </div>
                </form>
            </div>
        </div> 
    </div>
    )
};