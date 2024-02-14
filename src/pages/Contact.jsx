import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";


export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".com");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || message.length < 1) {
      alert("Please enter a valid email and message!");
      return;
    }

    const data = {
      email,
      message,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/sendemail",
        data
      );
      console.log(response.data);

      setEmail("");
      setMessage("");
      setShowConfirmation(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

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
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            {/* 🔥🔥🔥Button🔥🔥🔥 */}
            <div className="contact-form-button-container">
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>

        {showConfirmation && (
          <div className="confirmation-message">
            <p>Your message has been successfully sent!</p>
          </div>
        )}
      </div>
    </>
  );
}

