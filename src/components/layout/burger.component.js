import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { HeaderContext } from "../../contexts/header.context";

export const Burger = ({ menuOpen, toggleMenu }) => {
  const { isDark } = useContext(HeaderContext);

  const burgerIconClasses = classNames({
    "c-burger__icon": true,
    "is-open": menuOpen,
    "is-hero": !isDark
  });

  return (
    <div
      className="c-burger__container"
      onClick={toggleMenu}
      onKeyDown={toggleMenu}
      role="button"
      tabIndex={0}
    >
      <div className={burgerIconClasses} />
    </div>
  );
};

Burger.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};