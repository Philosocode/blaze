import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import { aosHeadingAttributes } from "../../shared/data.shared";
import TestimonialCard from "./testimonial-card.component";

const Testimonials = () => {
  const robertText = `"We feel absolutely blessed to have met Tam in the early stages of relaunching Politik™. He is a gifted, intuitive, reliable and responsive web designer and all-around terrific human being. Watch out for this one."`;

  const darronText = `"Tam did a fantastic job designing our company website. He was very professional, skilled, and easy to work with. There were times when we changed our vision for the website during its design phase, but Tam was very flexible in making these changes. He responded very quickly and got the job done. We highly recommend him if you're looking for any development or design services!"`;

  return (
    <section className="o-section o-section--white c-testimonial__section" id="testimonials">
      <h2 className="c-heading c-heading--dark c-heading--centered c-heading--section" {...aosHeadingAttributes}>
        Testimonials
      </h2>
      <div className="c-testimonial__content">
        <Carousel
          addArrowClickHandler
          arrowLeft={<IoIosArrowBack className="c-testimonial__arrow is-back" />}
          arrowRight={<IoIosArrowForward className="c-testimonial__arrow is-forward" />}
          dots
        >
          <TestimonialCard
            person="Robert Brennan Hart"
            position="Founder and Executive Director at Politik™"
            text={robertText}
          />
          <TestimonialCard
            person="Darron Ta"
            position="Martial Artist and Stunt Performer"
            text={darronText}
          />
        </Carousel>
      </div>
    </section>
  );
 };

export default Testimonials;