import React from "react";

import Layout from "../components/layout/layout.component";
import SEO from "../components/seo.component";
import Hero from "../components/hero.component";
import About from "../components/about.component";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
);

export default IndexPage;
