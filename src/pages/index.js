import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Skills, Contact } from 'components/landing';

export default () => (
    <Layout>
    <SEO />
    <Intro />
    <Skills />
    <About />
    <Contact />
  </Layout>
);