import React from "react";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import PropTypes from "prop-types";

const TestimonialArrow = ({ className, onClick, to }) => {
  return (    
    <button
      className={className}
      onClick={onClick}
      type="button"
      aria-label={to}
    >
      { to === "prev" ? <IoIosArrowBack className="c-testimonial__arrow" /> : <IoIosArrowForward className="c-testimonial__arrow" /> }
    </button>
  );
};

TestimonialArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.oneOf(["prev", "next"]).isRequired,
}

export default TestimonialArrow;