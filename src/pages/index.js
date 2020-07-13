import React from "react";

import Layout from "../components/layout/layout.component";
import SEO from "../components/seo.component";
import Hero from "../components/hero.component";
import About from "../components/about/about.component";
import Process from "../components/process/process.component";
import Feature from "../components/feature/feature.component";
import Projects from "../components/projects.component";
import Contact from "../components/contact.component";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Process />
    <Feature />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
