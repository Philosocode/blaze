import React from "react";
import Slider from "react-slick";

import { useMobileChecker } from "../../hooks/use-mobile-checker.hook";
import TestimonialCard from "./testimonial-card.component";
import SectionHeader from "../shared/section-header.component";

const Testimonials = () => {
  const isMobile = useMobileChecker();
  const robertText = `We feel absolutely blessed to have met Tam in the early stages of relaunching Politik™. He is a gifted, intuitive, reliable and responsive web designer and all-around terrific human being. Watch out for this one.`;

  const darronText = `Tam did a fantastic job designing our company website. He was very professional, skilled, and easy to work with. We highly recommend him if you're looking for any development or design services!`;

  const sliderOptions = {
    arrows: false,
    centerMode: true,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    fade: isMobile,
  };

  return (
    <section className="o-section o-section--black c-testimonial__section" id="testimonials">
      <SectionHeader color="red">Testimonials</SectionHeader>
      <div className="c-testimonial__content" data-aos="fade-right" data-aos-offset={400}>
        <Slider {...sliderOptions}>
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
        </Slider>
      </div>
    </section>
  );
 };

export default Testimonials;