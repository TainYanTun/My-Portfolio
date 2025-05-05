import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false); // New state for sending status

  useEffect(() => {
    if (status === 'success') {
      clearFields();
      setIsSending(false);
    }
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && email.indexOf("@") > -1) {
      setIsSending(true);
      
      emailjs.send(
        '',
        '',
        { email_address: email },
        ''
      )
      .then(() => {
        onValidated({ EMAIL: email, status: 'success' });
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        setIsSending(false);
        onValidated({ EMAIL: email, status: 'error' });
      });
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {isSending && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}