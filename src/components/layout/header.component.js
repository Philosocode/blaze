import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import { throttle } from "../../shared/helpers.shared";

import { HeaderContext } from "../../contexts/header.context";
import { useMobileChecker } from "../../hooks/use-mobile-checker.hook";
import BlazeLogo from "../../icons/blaze.svg";
import NavMobile from "./nav-mobile.component";
import NavList from "./nav-list.component";

const Header = () => {
  const { isDark } = useContext(HeaderContext);
  const isMobile = useMobileChecker();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(window.scrollY);

  const headerClasses = classNames({
    "c-header": true,
    "is-hidden": scrollDirection === "down",
    "is-dark": isDark
  });

  const throttledHandler = throttle(handleScroll, 200);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandler);
    return () => { window.removeEventListener('scroll', throttledHandler); }
  }, [throttledHandler]);

  function handleScroll() {
    const fromTop = window.scrollY;
    const DELTA = 5;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA) return;

    if (fromTop < DELTA) {
      setScrollDirection("up");
    }
    else if (fromTop > lastScrollTop) {
      if (scrollDirection !== 'down') setScrollDirection("down");
    }
    else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') setScrollDirection("up");
    }

    setLastScrollTop(fromTop);
  };

  return (
    <header className={headerClasses}>
      <Link to="#hero" className="c-header__logo-container" aria-label="Home">
        <BlazeLogo className="c-header__logo" style={{ animationDelay: "1200ms" }} />
      </Link>
      {
        isMobile
          ? <NavMobile />
          : <NavList />
      }
    </header>
  );
 }

export default Header;