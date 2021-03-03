import React from 'react'
import emailjs from 'emailjs-com';


const Confirmation = () => {

    const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_d3ybduj', e.target, 'user_1FbCneze2Ijh5xBQ1ARJQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
      }
    
    return (
        <div>
         <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="name" type="text" />

        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="birthdate">Subject</label>
        <input id="birthdate" name="subject" type="text" />

        <label htmlFor="birthdate">Message</label>
        <input id="birthdate" name="message" type="text" />

        <button>Send data!</button>
      </form>
        </div>
    )
}

export default Confirmation;
