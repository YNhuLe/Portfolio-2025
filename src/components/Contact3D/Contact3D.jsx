import React from "react";
import "./Contact3D.scss";
import { Star, Mail } from "lucide-react";

function OpenToWorkBage() {
  return (
    <div className="contact__work-badge">
      <span className="contact__work-badge-dot">
        <span className="contact__work-badge-ping"></span>
        <span className="contact__work-badge-circle"></span>
      </span>
      Open to Work
    </div>
  );
}

function AvailableNowBadge() {
  return (
    <div className="contact__available-badge">
      <span className="contact__available-badge-dot">
        <Star className="contact__available-star" />
      </span>
      Available Now
    </div>
  );
}

function EmailBadge() {
  return (
    <div className="contact__email-badge">
      <span className="contact__email-badge-dot">
        <span className="contact__email-badge-ping"></span>
        <span className="contact__email-badge-circle"></span>
      </span>
      <Mail className="contact__email-icon" />
      jennyle.tech@gmail.com
    </div>
  );
}
function Contact3D() {
  const images = {
    computer: "../images/img-3D.png",
    robot: "../images/R3D.png",
    cloud: "../images/cloud.png",
  };
  return (
    <div className="contact__3D">
      <img src={images.computer} alt="3D computer illustration" className="contact__3D-com"/>
      <OpenToWorkBage />
      <AvailableNowBadge />
      <EmailBadge />
      <img
        src={images.robot}
        alt="3D robot illustration"
        className="contact__3D-robot"
      />
      {/* <img
        src={images.cloud}
        alt="3D cloud illustration"
        className="contact__3D-cloud"
      /> */}
    </div>
  );
}

export default Contact3D;
