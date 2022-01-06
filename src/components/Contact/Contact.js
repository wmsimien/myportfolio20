import React, { useState, useRef } from 'react'
import '../Contact/Contact.css';


const Contact = () => {

    // create and set state and ref variables
    const nameInputRef = useRef(); 
    const emailInputRef = useRef(); 
    const messageInputRef = useRef();
    const [warning, setWarningMessage] = useState('');

    // handle submitting of the form data
    const handleOnSubmit = (e) => {
        // prevent default refresh
        e.preventDefault();
        // obtain entered data elements
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value; 
        const enteredMessage = messageInputRef.current.value;

        if (enteredEmail) {
            // pattern to match against
            let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(!pattern.test(String(enteredEmail).toLowerCase()));
            if (!pattern.test(String(enteredEmail).toLowerCase())){
                setWarningMessage('You must a valid email address...Thanks!');
                return;
            }
        }

        // just for fun...save in local storage
        localStorage.setItem('contactName', JSON.stringify(enteredName));
        localStorage.setItem('contactemail', JSON.stringify(enteredEmail));
        localStorage.setItem('contactmessage', JSON.stringify(enteredMessage));
      
        setWarningMessage('Thank you for your message...it is currently being saved in your local storage.');
   
    }
    
    const renderContent = () => {
        return (
            <>
                <form onSubmit={handleOnSubmit}>
                    <div className="contact-form">
                        <label htmlFor="name">Name:</label>
                        <input 
                            autoFocus
                            required
                            type="text" 
                            placeholder="name" 
                            name="name"
                            ref={nameInputRef}
                        />
                    </div>
                    <div className="contact-form">
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" 
                            required
                            placeholder="email" 
                            name="email"
                            ref={emailInputRef}
                            />
                    </div>
                    <div className="contact-form">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            required
                            name="message"
                            rows='5'
                            ref={messageInputRef}
                        />
                    </div>
                    {warning && (
                    <div>
                        <p className="warning-text">{warning}</p>
                    </div>
                    )}
                    <button>Submit</button>
                </form>
            </>
        )
    }

    return (
        <>
        {/* <h1 className="contact-title">Contact Me</h1> */}
        <div className="contact">
            <h1 className="contact-title">Contact Me</h1>
            {renderContent()} 
        </div>
        </>
    )
}

export default Contact
