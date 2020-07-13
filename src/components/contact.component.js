import React from "react";

import Form from "../components/form.component";

const Contact = () => {
  return (
    <section className="o-grid o-section o-section--black" id="contact">
      <div className="o-grid__item--narrow">
        <h2 className="c-heading c-heading--section c-heading--centered c-heading--light">Contact</h2>
        <p className="c-body-text c-body-text--light c-body-text--centered c-contact__text">
          {`Got a website or project you need help with?\nCool! Let's get in touch.`}
        </p>
        <Form />
      </div>
    </section>
  )
}

export default Contact;