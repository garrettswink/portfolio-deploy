import React, { useState } from 'react';
import ContactForm from "../components/ContactForm.jsx";
import Thankyou from "../components/Thankyou";
import "../style/Contact.css";

export default function ContactPage() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function handleFormSubmit() {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <ContactForm onFormSubmit={handleFormSubmit} />
      ) : (
        <Thankyou />
      )}

    </>
  );
}
