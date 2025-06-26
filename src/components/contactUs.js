import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next"

const ContactUs = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({});
  const [alert, setAlert] = useState({});
  const [validated, setValidated] = useState(false);
  const [t, i18n] = useTranslation();
  
  const sendMail = (name, email, subject, message) => {
    const sendable = {
      email: email,
      subject: `Web Email: ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
      html: `<p>Nombre: <b>${name}</b></p><p>Email: <b>${email}</b></p><p>Asunto: <b>${subject}</b></p><p>Mensaje: ${message}</p>`,
    };
    axios
      .post(process.env.REACT_APP_EMAIL_SERVICE, sendable, {headers: {'Connection': 'keep-alive'}})
      .then((response) => {
        setAlert({
          variant: "success",
          message: "Message sent successfully",
        });
      })
      .catch((error) => {
        setAlert({
          variant: "danger",
          message:
            "There was an error processing your request. Please try again later.",
        });
        console.log(error);
      })
      .finally(() => {
        setShowAlert(true);
        setShowSpinner(false);
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
      });
  };

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    setValidated(true);
    if (
      message?.name &&
      message?.email &&
      message?.subject &&
      message?.message &&
      document.getElementById("contact-form").checkValidity()
    ) {
      if (showAlert) setShowAlert(false);
      sendMail(message.name, message.email, message.subject, message.message);
      setShowSpinner(true);
      setShowModal(true);
      setValidated(false);
      return;
    }
  };
  return (
    <div className="contact-us bf-section-v-padding" id="contact">
      <div>
        <h1 className="contact-us-title mb-5">{t("contactUsAndDescriptions.contactUs")}</h1>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton={showAlert} />
          <Modal.Body>
            {showSpinner && (
              <div className="d-flex align-items-center justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            {showAlert && (
              <Alert
                variant={alert.variant}
                onClose={() => setShowAlert(false)}
              >
                <Alert.Heading className="text-center">
                  {alert.message}
                </Alert.Heading>
              </Alert>
            )}
          </Modal.Body>
        </Modal>

        <Form validated={validated} id="contact-form">
          <Form.Control
            className="contact-us-form"
            placeholder={t("contactUsAndDescriptions.placeholderName")}
            type="name"
            id="name"
            value={message?.name}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">{t("contactUsAndDescriptions.pleaseProvideAValidName")}</Form.Control.Feedback>
          <Form.Control
            className="mt-5 contact-us-form"
            placeholder={t("contactUsAndDescriptions.placeholderEmail")}
            type="email"
            id="email"
            value={message?.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">{t("contactUsAndDescriptions.pleaseProvideAValidEmailAddress")}</Form.Control.Feedback>
          <Form.Control
            className="mt-5 contact-us-form"
            placeholder={t("contactUsAndDescriptions.placeholderSubject")}
            type="text"
            id="subject"
            value={message?.subject}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">{t("contactUsAndDescriptions.pleaseProvideAValidSubject")}</Form.Control.Feedback>
          <Form.Control
            className="mt-5 contact-us-form-textarea"
            as="textarea"
            rows={4}
            placeholder={t("contactUsAndDescriptions.writeAMessage")}
            id="message"
            value={message?.message}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">{t("contactUsAndDescriptions.pleaseProvideAMessage")} </Form.Control.Feedback>
        </Form>
      </div>
      <div className="div-button">
        <button
          className="button-bitforce"
          onClick={handleSubmit}
          disabled={showSpinner}
        >
          {t("contactUsAndDescriptions.sendMessage")}
        </button>{" "}
      </div>
    </div>
  );
};
export default ContactUs;
