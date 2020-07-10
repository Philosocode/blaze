import React from "react";

import Layout from "../components/layout/layout.component";
import SEO from "../components/seo.component";
import Hero from "../components/hero.component";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
);

export default IndexPage;
