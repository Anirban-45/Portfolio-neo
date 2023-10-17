import React from 'react';
import Contactform from '../components/Contactform';
import '../styles/Contact.css'
import send from '../assets/send.png'


function Contact() {
    window.scrollTo(0,0);
    return(
        <div className='Ccontainer'>
            <div className="top-welcome">
                <img src={send} alt=""/>
                <div className="top-item">
                    <label id="top-label">Want to get in touch?</label>
                    <label id="top-label">Drop me a letter!</label>
                </div>
            </div>
            <Contactform/>
        </div>
    )
}

export default Contact;
