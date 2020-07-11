import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="c-footer">
    <div className="c-footer__copyright">© Tam Le {new Date().getFullYear()}</div>
    <ul className="c-footer__icons">
      <li className="c-footer__icon">
        <a className="c-footer__link" href="mailto:hello@tamxle.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </li>
      <li className="c-footer__icon">
        <a className="c-footer__link" href="https://github.com/Philosocode" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </li>
      <li className="c-footer__icon">
        <a className="c-footer__link" href="https://www.linkedin.com/in/tamxle/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;