import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contactform.css'

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xcufcon', 'template_8j1d3re', form.current, 'p3066Z-B-5AJvLYQa')
      .then(
      (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Message sent');
      },
      (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="Cform" ref={form} onSubmit={sendEmail}>
        <div>
            <label>Name</label>
            <input className="inputUser" placeholder='Enter your name' type="text" name="user_name" />
        </div>
        <div>
            <label>Email</label>
            <input className="inputEmail" placeholder='Enter your email address' type="email" name="user_email" />
        </div>
        <div>
            <label>Message</label>
            <textarea className="inputMessage" placeholder='Your message' name="message" />
        </div>
      <input className='subbutton' type="submit" value="Send" />
    </form>
  );
};

export default Contactform;
