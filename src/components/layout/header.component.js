import React, { useContext } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import BlazeLogo from "../../icons/blaze.svg";
import { HeaderContext } from "../../contexts/header.context";
import { navLinks } from "../../shared/data.shared";

const Header = () => { 
  const { isDark } = useContext(HeaderContext);

  const headerClasses = classNames({
    "c-header": true,
    "is-dark": isDark
  });

  function renderNavLinks() {
    return navLinks.map((navLink, idx) => (
      <li key={navLink.name} className="c-header__nav-item" style={{ animationDelay: (1050 - idx * 150) + "ms" }}>
        <Link
          className="c-heading c-heading--condensed c-header__nav-link" 
          to={navLink.path}
        >{navLink.name}</Link>
      </li>
    ));
  }

  return (
    <header className={headerClasses}>
      <Link to="#hero" className="c-header__logo-container" aria-label="Home">
        <BlazeLogo className="c-header__logo" style={{ animationDelay: "1200ms" }} />
      </Link>
      <nav role="navigation">
        <ul className="c-header__nav-list">
          {renderNavLinks()}
        </ul>
      </nav>
    </header>
  );
 }

export default Header;