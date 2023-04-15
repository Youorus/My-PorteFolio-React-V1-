import React, { useState } from "react";
import "./Contact.css"
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/send', { name, email, message })
      .then(response => {
        console.log('Mail sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error('Error sending mail:', error);
      });
  }

 
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
    <img className="imgContact" alt="contact" src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
    <div className="forms">
    <div >
        <input
        placeholder="Nom"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <input
        placeholder="Email"
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <textarea
        placeholder="Message"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <button className='sendMess' type="submit">Envoyer</button>
    </div>
      
    </form>
  );
}

export default ContactForm;
