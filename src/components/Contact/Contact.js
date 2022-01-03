import React, { useState } from 'react'
import '../Contact/Contact.css';

const Contact = () => {

    // create and set state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [warning, setWarningMessage] = useState('');

    const handleChange = (e) => {
        // change name of element which triggered event
        // and set value accordingly
        if (e.target.name === 'name'){
            setName(e.target.value);   
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setMessage(e.target.value);
        }
    }

    // handle submitting of the form data
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setWarningMessage('');
        // check data entered
        if (!name && !email) {
            setWarningMessage('You must enter a name and email address...Thanks!');
            return;
        } 
        if (email) {
            // pattern to match against
            let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(!pattern.test(String(email).toLowerCase()));
            if (!pattern.test(String(email).toLowerCase())){
                setWarningMessage('You must a valid email address...Thanks!');
                return;
            }
        }
       if (!message) {
            setWarningMessage('A message must be entered...Thanks!');
            return;
        } else {
            setWarningMessage('Thank you for your message...it will be handled in the future.');
            // setName('');
            // setEmail('');
            // setMessage('');
            // return;
        }
        // reset variables
        setName('');
        setEmail('');
        setMessage('');
    }
    
    const renderContent = () => {
        return (
            <>
                <form>
                    <div className="contact-form">
                        <label>Name:</label>
                        <input 
                            autoFocus
                            type="text" 
                            placeholder="name" 
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-form">
                        <label>Email Address:</label>
                        <input type="text" 
                            placeholder="email" 
                            name="email"
                            value={email}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="contact-form">
                        <label>Message:</label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleChange}
                        />
                    </div>
                    {warning && (
                    <div>
                        <p className="warning-text">{warning}</p>
                    </div>
                    )}
                    <button type="button" onClick={handleOnSubmit}>
                        Submit
                    </button>
                </form>
            </>
        )
    }

    return (
        <div className="contact">
            <h1 className="contact-title">Contact Me</h1>
            {renderContent()} 
        </div>
    )
}

export default Contact
