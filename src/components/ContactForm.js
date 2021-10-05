import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function ContactForm() {

  const [textInput, setTextInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState('')

  console.log(textInput);

  function handleChange(e) {
    if (e.target.name === "email") {
      if (validateEmail(e.target.value) === false) {
          setErrorMessage('*Must provide a valid email')
      } else {
          setErrorMessage('')
      }
    }
    setTextInput({ ...textInput, [e.target.name]: e.target.value });
  }

  function handleFormSubmit() {
    //where is the form data going lol?
    console.log(textInput);
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form">
        {errorMessage && (
            <div>
              <h4 id="error-message">{errorMessage}</h4>  
            </div>
        )}
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          id="email-input"
          placeholder="Email..."
          onBlur={handleChange}
        />
        <textarea
          id="message-input"
          name="message"
          placeholder="Your Message..."
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit" id="form-button" onSubmit={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

//capture input of fields
// useState to validate email as they leave input field
// Submit button => to my email?
