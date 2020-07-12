import React from "react";

import Form from "../components/form.component";

const Contact = () => {
  return (
    <section className="o-grid c-contact__section" id="contact">
      <div className="o-grid__item--narrow c-contact__content">
        <h2 className="c-contact__heading">Contact</h2>
        <p className="c-contact__description">Got a website or project you need help with?<br></br>Cool! Let's get in touch.</p>
        <Form />
      </div>
    </section>
  )
}

export default Contact;