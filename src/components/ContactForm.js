import React from 'react';

export default function ContactForm(props) {


    const {textInput, inputHandlers} = props;
    const {handleChange} = inputHandlers;
    console.log(textInput);

    return (
    <div className="contact-form-container">
        <form className='contact-form'>
            <input 
            type='text' 
            id="name-input" 
            placeholder='Name...' 
            value={textInput.name.value} 
            onChange={(e) => handleChange(e.target.value)}
            />
            <input 
            type='text' 
            id="email-input" 
            placeholder="Email..." 
            />
            <textarea 
            id='message-input' 
            placeholder="Your Message..."
            >
            </textarea>
            <br/>
            <button 
            type="submit" 
            id="form-button"
            >
            Submit
            </button>
        </form>
    </div>
    )
}


//capture input of fields
// useState to validate email as they leave input field
// Submit button => to my email? 
