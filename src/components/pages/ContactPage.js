import React, {useState} from 'react';
import ContactForm from '../ContactForm'


export default function ContactPage() {

    const [textInput, setTextInput] = useState({name: '', email: '', message: ''});

    function handleChange(changes){
        handleFormInput({...textInput, ...changes});
    }
    
    function handleFormInput (text)  {
        // const userText = [...text];
        setTextInput(text.value);
    }

    const inputHandlers = {
        handleChange,
        handleFormInput,
        
    }


    return (
        <>
            <ContactForm inputHandlers={inputHandlers} textInput={textInput} />
        </>
    )
}
