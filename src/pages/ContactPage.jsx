import "../style/Contact.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const handleSubmit = () => {
    // This function will be called when the form is submitted.
    setTimeout(() => {
      window.location.href = '/thankyou'; // Redirect after a short delay
    }, 150); // Delay in milliseconds
  };

  return (
    <>
      <div className="contact-container">
        {/* ... other components ... */}
        <div className="contact-form-container">
          <Form 
            name="contact" 
            method="post" 
            data-netlify="true"
            // Remove the action attribute if you're handling redirection with JavaScript
          >
            {/* ... other form inputs ... */}
            <div className="d-flex justify-content-center">
              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
