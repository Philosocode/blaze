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
      <Link className="c-nav-list__link" to={navLink.path}>{navLink.name}</Link>
    ));
  }

  return (
    <header className="c-header">
      <a href="#hero">
        <Image className="c-logo" fluid={data.logoImage.childImageSharp.fluid} alt="Logo" />
      </a>
      <nav>
        <ul className="c-nav-list">
          <li className="c-nav-list__item">
            {renderNavLinks()}
          </li>
        </ul>
      </nav>
    </header>
  );
 }

export default Header;