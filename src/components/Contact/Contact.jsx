import { useState, useRef } from "react";
import errors from "../../assets/icons/error-24px.svg";
import "./Contact.scss";
import validator from "validator";
import ContactModal from "../ContactModal/ContactModal";
import EarthCanvas from "../Earth/Earth";
import emailjs from "@emailjs/browser";
function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({
    show: false,
    name: "",
    text: "",
  });
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
    if (newError.name || newError.email || newError.message) {
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          setModalData({
            show: true,
            name: name,
            text: "Thank you. I will get back to you as soon as possible.",
          });
          handleReset();
          // console.log("Contact");
        },
        (error) => {
          setLoading(false);
          setModalData({
            show: true,
            name: name,
            text: "Something went wrong. Please try again!",
          });
          console.log(error);
        }
      );
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
      <div className="contact__wrapper">
        <div className="contact__earth">
          <EarthCanvas />
        </div>
        <form
          onSubmit={handleSendEmail}
          ref={formRef}
          className="contact__form">
          <h3 className="contact__form-title">Contact.</h3>
          <div className="contact__form-property">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              value={name}
              name="from_name"
              onChange={handleChangeName}
              placeholder="What's your good name?"
              className={`contact__form-input ${error.name ? "invalid" : ""}`}
            />
            <div className={error.name ? "error__state" : ""}>
              {error.name && (
                <>
                  <img
                    src={errors}
                    alt="error-icon"
                    className="error__icon"
                    loading="lazy"
                  />
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
              name="from_email"
              onChange={handleChangeEmail}
              placeholder="What's your good email?"
              className={`contact__form-input ${error.email ? "invalid" : ""}`}
            />
            <div className={error.email ? "error__state" : ""}>
              {error.email && (
                <>
                  <img
                    src={errors}
                    alt="error-icon"
                    className="error__icon"
                    loading="lazy"
                  />
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
              name="from_message"
              onChange={handleChangeMessage}
              placeholder="What you want to say?"
              className={`contact__form-input ${
                error.message ? "invalid" : ""
              }`}
            />
            <div className={error.message ? "error__state" : ""}>
              {error.message && (
                <>
                  <img
                    src={errors}
                    alt="error-icon"
                    className="error__icon"
                    loading="lazy"
                  />
                  <p className="error__message">This field is required</p>
                </>
              )}
            </div>
          </div>
          <button type="submit" className="contact__button" disabled={loading}>
            {loading ? "Sending... " : "Send"}
          </button>
        </form>
        <ContactModal
          show={modalData.show}
          onHide={() => setModalData({ ...modalData, show: false })}
          response={{ name: modalData.name, text: modalData.text }}
        />
      </div>
    </div>
  );
}

export default Contact;
