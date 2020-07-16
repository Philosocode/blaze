import React from "react";
import { Link } from "gatsby";

import BlazeLogo from "../../icons/blaze.svg";
import { navLinks } from "../../shared/data.shared";

const Header = () => { 
  function renderNavLinks() {
    return navLinks.map((navLink, idx) => (
      <li key={navLink.name} className="c-header__nav-item" style={{ animationDelay: (750 - idx * 150) + "ms" }}>
        <Link
          className="c-heading c-heading--condensed c-header__nav-link" 
          to={navLink.path}
        >{navLink.name}</Link>
      </li>
    ));
  }

  return (
    <header className="c-header">
      <Link to="#hero" aria-label="Home">
        <BlazeLogo className="c-header__logo" style={{ animationDelay: "900ms" }} />
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