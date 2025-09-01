import React from "react";
import classes from "./contactUs.module.css";
import Footer from "../footer/footer";
import { useState } from "react";

function ContactUsComp() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message } = form;
    const fullMessage = `Hello, my name is ${name}. My number is ${phone}. ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    // Replace with your business WhatsApp number
    const whatsappNumber = "27792633621";

    // Open WhatsApp chat in new tab
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className={classes.contactUs}>
      <div className={classes.contactUsContents}>
        <div className={classes.imageContact}>
          <img
            src="./images/userEmail.jpeg"
            alt="user image"
            className={classes.userPic}
          />
        </div>
        <div className={classes.formContact}>
          <h1>CONTACT US TODAY</h1>
          <div className={classes.contactLocations}>
            CENTURION | DIEPKLOOF | JEFFREYS BAY | LAGOS | ABUJA
          </div>
          <div className={classes.formDiv}>
            <form onSubmit={handleSubmit} className={classes.formC}>
              <div className={classes.icons}>
                <img
                  src="./images/user.png"
                  alt="user icon"
                  className={classes.icon1}
                />
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  required
                  className={classes.inputContact}
                />
              </div>

              <div>
                <img
                  src="./images/call.png"
                  alt="call icon"
                  className={classes.call}
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className={classes.inputContact}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={classes.inputContact}
                ></textarea>
              </div>
              <button type="submit" className={classes.submit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUsComp;
