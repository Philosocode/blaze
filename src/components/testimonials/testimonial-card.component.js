import React from "react";
import PropTypes from "prop-types";

const TestimonialCard = ({ person, position, text }) => (
  <div className="c-testimonial__card">
    <p className="c-testimonial__text">{text}</p>
    <h4 className="c-heading--condensed c-testimonial__person">{person}</h4>
    <h4 className="c-heading--condensed c-testimonial__position">{position}</h4>
  </div>
);

TestimonialCard.propTypes = {
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TestimonialCard;