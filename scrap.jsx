// ContactPage

// import ContactForm from "../components/ContactForm.jsx";
import Thankyou from "../components/Thankyou";
import "../style/Contact.css";

export default function ContactPage() {
  return (
    <>
   {/* <ContactForm /> */}
   <Thankyou />
    </>
  );
}

// ContactForm Component
import Button from "react-bootstrap/Button";


export default function ContactForm() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-header-container ">
          <h1>Contact Me</h1>
        </div>

        <div className="contact-overview-container">
          <p>
            If you have any questions, inquiries, or would like to discuss
            potential projects, please feel free to get in touch using the below
            contact form, or by reaching out to me directly at
            garrettswink@outlook.com.
          </p>
        </div>

        <div className="contact-form-container">
          <Form name="contact" method="post" data-netlify="true">
            <Form.Control type="hidden" name="form-name" value="contact" />

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

// Thankyou Component
import "../style/Thankyou.css";

export default function Thankyou() {
  return (
    <>
      <div className="thankyou-container">
        <div className="thankyou-header-container ">
          <h1>Thank you!</h1>
        </div>

        <div className="thankyou-overview-container">
          <p>Your message has been received! I'll be in touch soon.</p>
        </div>
      </div>
    </>
  );
}


// ChatGPT Prompt
// When a user arrives at the Contact Page
// I want the ContactForm displayed
// When a user clicks the submit button
// I want the ContactForm replaced by the Thankyou