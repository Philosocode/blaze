import React from "react";

import { aosHeadingAttributes } from "../../shared/data.shared";
import SectionHeading from "../shared/section-header.component";
import Form from "./form.component";

const Contact = () => {
  return (
    <section className="o-grid o-section o-section--black" id="contact">
      <div className="o-grid__item--center">
        <SectionHeading color="black">Contact</SectionHeading>
        <p className="c-body-text c-body-text--light c-body-text--centered c-contact__text" {...aosHeadingAttributes}>
          {`Got a website or project you need help with?\nCool! Let's get in touch.`}
        </p>
      </div>
      <div className="o-grid__item--narrow">
        <div {...aosHeadingAttributes} data-aos="fade-right">
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact;