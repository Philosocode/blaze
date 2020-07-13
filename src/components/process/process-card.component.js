import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const ProcessCard = ({ description, FaIcon, isRight, stepNum, title }) => {
  const cardClasses = classNames({
    "c-process__card": true,
    "is-right": isRight
  });

  function stepNumToWord() {
    if (stepNum === 1) return "One";
    if (stepNum === 2) return "Two";
    if (stepNum === 3) return "Three";
    if (stepNum === 4) return "Four";
    if (stepNum === 5) return "Five";
    return "Six";
  }

  return (
    <div className={cardClasses}>
      <div className="c-process__column">
        <div className="c-process__icon-container">
          <FaIcon className="c-process__icon" />
        </div>
      </div>
      <div className="c-process__column c-process__text">
        <h3 className="c-process__step">Step {stepNumToWord()}</h3>
        <h3 className="c-process__title">{title}</h3>
        <p className="c-process__description">{description}</p>
      </div>
    </div>
  );
}

ProcessCard.propTypes = {
  description: PropTypes.string.isRequired,
  FaIcon: PropTypes.object.isRequired,
  stepNum: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isRight: PropTypes.bool,
};

export default ProcessCard;