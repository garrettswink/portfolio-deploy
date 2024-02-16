import React from "react";
import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  // Removed useNavigate since we're handling redirection with Netlify's hidden field

  return (
    <>
      <div className="contact-container">
        <div className="contact-header-container ">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-overview-container">
          <p>
            If you have any questions, inquiries, or would like to discuss potential projects, please feel free to get in touch using the below contact form, or by reaching out to me directly at garrettswink@outlook.com.
          </p>
        </div>
        <div className="contact-form-container">
          <Form 
            name="contact" 
            method="post" 
            data-netlify="true"
            // Removed onSubmit handler to let Netlify handle the submission
          >
            <Form.Control type="hidden" name="form-name" value="contact" />
            <Form.Control type="hidden" name="redirect" value="/thankyou" /> {/* This hidden input tells Netlify where to redirect after form submission */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                name="message"
                placeholder="Share a short message and I'll get back to you ASAP."
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
