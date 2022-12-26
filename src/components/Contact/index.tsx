import React from 'react';
import './contact.scss';

function Contact() {
    return (
        <div className='current-page-container' id='contact'>
            <h1 className='main-title'>Contact</h1>
            <div className="contact-page-inner-container">
                <h4 className='block-title'>Get In Touch</h4>
                <p>I will be very happy to answer any of your  questions or consider your offer. Just contact me and I’ll try my best to answer you as soon as possible!</p>
                <a href="mailto:olha.rybchynska@gmail.com" className='contact-link'>Hello world!</a>
                <p>Also you can check my full CV here</p>
                <a href="https://drive.google.com/file/d/1779TpNAWcDPRj03jR2xIQqPSrfLR0Fn0/view?usp=sharing" className='cv-link' target='_blank'>open CV</a>
            </div>
        </div>
    );
}

export default Contact;
