import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ServiceCard = ({ heading, Icon, idx, text }) => { 
  const cardClasses = classNames({
    "c-service__card": true,
    "c-service__card--red": idx === 0,
    "c-service__card--green": idx === 1,
    "c-service__card--blue": idx === 2
  });

  return (
    <div data-aos="fade-up" data-aos-delay={(idx * 150)}>
      <div className={cardClasses}>
        <div className="c-service__icon-container">
          <Icon className="c-service__icon" />
        </div>
        <h4 className="c-heading c-heading--condensed c-service__heading">{heading}</h4>
        <p className="c-body-text c-body-text--small c-service__text">{text}</p>
      </div>
    </div>
  );
 };

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  Icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default ServiceCard;