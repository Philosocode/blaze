import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

import { navLinks } from "../../shared/data.shared";

const Header = () => { 
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        ...fluidImage
      }
    }
  `);

  function renderNavLinks() {
    return navLinks.map(navLink => (
      <Link
        className="c-heading c-heading--condensed c-header__nav-link" 
        to={navLink.path}
      >{navLink.name}</Link>
    ));
  }

  return (
    <header className="c-header">
      <Link to="#hero" aria-label="Home">
        <Image className="c-header__logo" fluid={data.logoImage.childImageSharp.fluid} alt="Logo" />
      </Link>
      <nav role="navigation">
        <ul className="c-header__nav-list">
          <li className="c-header__nav-item">
            {renderNavLinks()}
          </li>
        </ul>
      </nav>
    </header>
  );
 }

export default Header;