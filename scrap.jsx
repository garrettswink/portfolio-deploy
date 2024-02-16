// App.jsx

import "./style/App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/LandingPage";
import Contact from "./pages/ContactPage";
import Thankyou from "./pages/ThankyouPage";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="route-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}


// Contact Page

import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
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
          <Form 
          name="contact" 
          method="post" 
          data-netlify="true"
          action="/thankyou"
          >
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




// Thankyou Page
export default function ThankyouPage(){
  return (
    <>
    <h1>Thank you!</h1>
      </>
  );
}


// Index

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Garrett Swink</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

    <form name="contact" netlify netlify-honeypot="bot-field" action="/thankyou" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

    
  </body>
</html>