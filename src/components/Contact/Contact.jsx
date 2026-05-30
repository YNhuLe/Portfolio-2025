import { useState, useRef } from "react";
import errors from "../../assets/icons/error-24px.svg";
import "./Contact.scss";
import validator from "validator";
import ContactModal from "../ContactModal/ContactModal";
import EarthCanvas from "../Earth/Earth";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import Contact3D from "../Contact3D/Contact3D";
import ContactSocial from "../ContactSocial/ContactSocial";
import {Toaster, toast} from "sonner";
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
      toast.error("Please fill in all required fields.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,

        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          handleReset();
        },
        (error) => {
          setLoading(false);
          setModalData({
            show: true,
            name: name,
            text: "Something went wrong. Please try again!",
          });
          console.log(error);
          console.log("Sent message: ", { name, email, message });
        },
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
      <Toaster richColors position="top-right" 
      
      toastOptions={{ duration: 5000 }}/>
      <div className="contact__feature">
        <Mail className="contact__feature-icon" />

        <p className="contact__feature-title">Let's Connect</p>
      </div>
      <h2 className="contact__text">Get In Touch</h2>
      <p className="contact__text-subtitle">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>
      <div className="contact__section">
        <Contact3D />
        <div className="contact__wrapper">
          <form
      
            ref={formRef}
            className="contact__form"
          >
            <div className="contact__form-property">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                value={name}
                name="from_name"
                onChange={handleChangeName}
                placeholder="your name"
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
              <label htmlFor="email"> EMAIL</label>
              <input
                id="email"
                type="text"
                value={email}
                name="from_email"
                onChange={handleChangeEmail}
                placeholder="your@gmail.com"
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
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                type="text"
                value={message}
                name="from_message"
                onChange={handleChangeMessage}
                placeholder="Tell me about your project or just say hello..."
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
            <button
              type="button"
              className="contact__button contact__button--full"
              onClick={handleSendEmail}
              disabled={loading}
            >
              {loading ? "Sending... " : "Send Message"}
            </button>
          </form>
          <ContactSocial />
        </div>
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
