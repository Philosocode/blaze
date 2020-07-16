import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ heading, Icon, text }) => (
  <div className="c-service__card">
    <div className="c-service__icon-container">
      <Icon className="c-service__icon" />
    </div>
    <h4 className="c-heading c-heading--condensed c-service__heading">{heading}</h4>
    <p className="c-body-text c-body-text--small c-service__text">{text}</p>
  </div>
);

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

export default ServiceCard;