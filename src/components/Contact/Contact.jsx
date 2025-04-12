import { useState, useRef } from "react";
import errors from "../../assets/icons/error-24px.svg";
import "./Contact.scss";
import validator from "validator";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import EarthCanvas from "../Earth/Earth";
function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    const newError = {
      name: name.trim() ? "" : "Name field is required!",
      email: !email.trim()
        ? "Email field is required!"
        : !validator.isEmail(email)
        ? "Email should be in a valid format (e.g., example@domain.com)"
        : "",
      message: message.trim() ? "" : "Message field is required!",
    };
    setError(newError);
    if (newError.name || newError.email || newError.message) return;
    handleReset();
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact">
      <h2 className="contact__text">Get In Touch</h2>
      <EarthCanvas />
      <form onSubmit={handleSendEmail} ref={formRef} className="contact__form">
        <h3 className="contact__form-title">Contact.</h3>
        <div className="contact__form-property">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
            placeholder="What is your good name?"
            className={`contact__form-input ${error.name ? "invalid" : ""}`}
          />
          <div className={error.name ? "error__state" : ""}>
            {error.name && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="contact__form-property">
          <label htmlFor="name">Your Email</label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChangeEmail}
            placeholder="What is your good email?"
            className={`contact__form-input ${error.email ? "invalid" : ""}`}
          />
          <div className={error.email ? "error__state" : ""}>
            {error.email && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>

        <div className="contact__form-property">
          <label htmlFor="name">Your Message</label>
          <textarea
            type="text"
            value={message}
            name="message"
            onChange={handleChangeMessage}
            placeholder="What is your good message?"
            className={`contact__form-input ${error.message ? "invalid" : ""}`}
          />
          <div className={error.message ? "error__state" : ""}>
            {error.message && (
              <>
                <img src={errors} alt="error-icon" className="error__icon" />
                <p className="error__message">This field is required</p>
              </>
            )}
          </div>
        </div>
        <button type="submit" className="contact__button">
          {loading ? "Sending... " : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
