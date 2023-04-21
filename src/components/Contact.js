import React from "react";
import classData from "../data/ClassData";
import { BsPhone, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";
import UpArrow from "./UpArrow";
function Contact() {
  const doNothing = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-container">
        <form className="contact-us-form" onSubmit={doNothing}>
          <h1 className="contact-title">Leave your info</h1>
          <fieldset className="form-field">
            <fieldset className="contact-form-pinfo-wrapper">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name *"
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
              ></input>
              <select id="class-form-select">
                <option value="" selected disabled hidden>
                  Select Class
                </option>
                {classData.map((item) => {
                  return (
                    <option placeholder="Select Class" value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </fieldset>
            <fieldset className="contact-form-message-wrapper">
              <textarea
                name="message"
                placeholder="Message (Optional)"
              ></textarea>
            </fieldset>
          </fieldset>
          <h4 className="contact-form-button" type="submit">
            Message Us!
          </h4>
        </form>
        <div className="contact-content">
          <h1 className="contact-content-title">Contact Us</h1>
          <div className="contact-content-container">
            <h2>
              <BsPhone />
              555-111-2233
            </h2>
            <h2>
              <HiOutlineMail />
              info@Fitness.com
            </h2>
            <h2>
              <BsInstagram />
              FitnessCenter
            </h2>
            <h2>
              <FiTwitter />
              FitnessCenter
            </h2>
          </div>
        </div>
      </div>
      <div className="up-arrow-floater">
        <UpArrow />
      </div>
    </div>
  );
}

export default Contact;
