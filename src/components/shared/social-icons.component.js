import React from "react";

import { socialIcons } from "../../shared/data.shared";

const SocialIcons = ({ linkClass }) => { 
  let linkClasses = "c-social__link ";
  if (linkClass) linkClasses += linkClass;

  return (
    <ul className="c-social__icons">
      {
        socialIcons.map(icon => (
          <li key={icon.link} className="c-social__icon">
            <a className={linkClasses} href={icon.link} target="_blank" rel="noopener noreferrer">
              <icon.icon />
            </a>
          </li>
        ))
      }
    </ul>
  );
 };

export default SocialIcons;