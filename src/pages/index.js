import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Desarrollador front end" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <InterestsSection sectionId="details" heading="Lenguajes y herramientas" />
        <AboutSection sectionId="about" heading="Sobre mi" />
        <ProjectsSection sectionId="features" heading="Experiencia y proyectos" />
        <ContactSection sectionId="github" heading="Contacto" />
      </Page>
    </>
  );
}
