import React, { useState } from "react";
import Reaptcha from 'reaptcha';

import { useForm } from "../hooks/use-form.hook";
import { useMobileChecker } from "../hooks/use-mobile-checker.hook";
import FormGroup from "./form-group.component";

const Form = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = values;

  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [recaptchaValid, setRecaptchaValid] = useState(false);
  const [error, setError] = useState("");
  const isMobile = useMobileChecker();

  const recaptchaError = "ERROR: Please complete the reCAPTCHA.";

  function handleSubmit(ev) {
    if (!name || !email || !message) {
      ev.preventDefault();
    }

    else if (!recaptchaValid) {
      ev.preventDefault();
      setError(recaptchaError);
    }
  }

  function recaptchaLoaded() {
    setCaptchaLoaded(true);
  }

  function verifyRecaptcha() {
    setRecaptchaValid(true);
    setError("");
  }

  function expiredRecaptcha() {
    setRecaptchaValid(false);
    setError(recaptchaError);
  }

  return (
    <form 
      acceptCharset="UTF-8" 
      action="https://usebasin.com/f/62a47c131769"
      onSubmit={handleSubmit}
      name="contact" 
      className="c-form__container" 
      method="POST"
      autoComplete="off"
    >
      <FormGroup
        name="name"
        type="text"
        onChange={handleChange}
        value={name}
      />
      <FormGroup
        name="email"
        type="email"
        onChange={handleChange}
        value={email}
      />

      <FormGroup
        name="message"
        type="textarea"
        onChange={handleChange}
        value={message}
      />
      
      <div className="c-form__group">
        { error && <p className="c-form__error">{error}</p> }
        {
          // Display an empty div until captcha loaded
          !captchaLoaded && <div className="c-form__empty-div"></div>
        }
        <Reaptcha
          sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
          className="c-form__recaptcha"
          onVerify={verifyRecaptcha}
          onError={expiredRecaptcha}
          onLoad={recaptchaLoaded}
          inject={false}
          size={ isMobile ? "compact" : "normal" }
          theme="dark"
        />
        
        <button className="c-button c-button--black c-form__submit" type="submit">SUBMIT</button>
      </div>
      
      <input type="hidden" name="hero_net"></input>
    </form>
  )
};

export default Form;