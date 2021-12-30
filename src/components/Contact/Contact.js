import React from 'react'
import '../Contact/Contact.css';

const Contact = ( {name, setName, email, setEmail, message, setMessage } ) => {

    const sendAlert = () => {
        alert('Thank you for your message...it will be handled in the future.');
    }
    
    const renderContent = () => {
        return (
            <>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="contact_form">
                        <label>Name:</label>
                        <input 
                            autoFocus
                            type="text" 
                            placeholder="Name" 
                            required 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="contact_form">
                        <label>Email Address:</label>
                        <input type="text" 
                            placeholder="Email Address" 
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            />
                    </div>
                    <div className="contact_form">
                        <label>Message:</label>
                        <textarea
                            required
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                    </div>
                    <div><p>Warning</p></div>
                    <button type="button" 
                        onClick={() => sendAlert()} >
                        Submit
                    </button>
                </form>
            </>
        )
    }

    return (
        <div className="contact">
            <h1 className="contact_title">Contact Me</h1>
            {renderContent()} 
        </div>
    )
}

export default Contact
