import React, { useState } from 'react';

const ContactForm = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [isChecking, setIsChecking] = useState(false)

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleNameChange = (e) => setName(e.target.value)
    const handleMessageChange = (e) => setMessage(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email && name && message) {
            setIsChecking(true);

            await new Promise(resolve => setTimeout(resolve, 3000))

            console.log('Submitted:', { email, name, message })

            setIsChecking(false)
        } else {
            alert('Please fill in all fields before submitting.')
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <br />
                <input type="email" value={email} onChange={handleEmailChange} className="email-input" required />
            </label>
            <br />
            <label>
                Name:
                <br />
                <input type="text" value={name} onChange={handleNameChange} className="name-input" required />
            </label>
            <br />
            <label>
                Message:
                <br />
                <textarea value={message} onChange={handleMessageChange} className="message-input" required />
            </label>
            <br />
            <button className={`submit-box ${isChecking ? 'checking' : ''}`} type="submit">
    <div className="circle"></div>
    <span>{isChecking ? 'Sending...' : 'Submit'}</span>
</button>

        </form>
    )
}

export default ContactForm;
