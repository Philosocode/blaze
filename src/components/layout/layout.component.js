/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "./header.component";
import Footer from "./footer.component";
import Loader from "../shared/loader.component";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) return <Loader finishLoading={() => setIsLoading(false)} />

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
