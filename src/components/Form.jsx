import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <section className="contact-form-page">
      <h2 className="form-title">Contact Me</h2>
      <form className="contact-form">
        <div className="input-con">
          <input type="text" placeholder="Name *" />
        </div>
        <div className="input-con">
          <input type="phone" placeholder="Phone *" />
        </div>
        <div className="input-con">
          <input type="email" placeholder="email *" />
        </div>
        <div className="input-con">
          <input type="subject" placeholder="subject *" />
        </div>
        <div className="input-con">
          <textarea cols="30" rows="10" placeholder="Message *"></textarea>
        </div>
        <Button title={"Send Message"} />
      </form>
    </section>
  );
};

export default Form;
