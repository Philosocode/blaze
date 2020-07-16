import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "../components/layout/layout.component";
import SEO from "../components/seo.component";
import Hero from "../components/hero/hero.component";
import About from "../components/about/about.component";
import Services from "../components/services/services.component";
import Process from "../components/process/process.component";
import Feature from "../components/feature/feature.component";
import Projects from "../components/projects.component";
import Contact from "../components/contact.component";

const IndexPage = () => { 
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Services />
      <Process />
      <Feature />
      <Projects />
      <Contact />
    </Layout>
  );
 };

export default IndexPage;
