import React, { lazy, Suspense } from 'react';
const Navbar = lazy(() => import('./components/navbar'));
const LandingImage = lazy(() => import('./components/landingImage'));
const ArrowTop = lazy(() => import('./components/arrowTop'));
const AboutMe = lazy(() => import('./components/aboutMe'));
const Skills = lazy(() => import('./components/Skills'));
const Studies = lazy(() => import('./components/Studies'));
const Experience = lazy(() => import('./components/experience'));
const DownloadCV = lazy(() => import('./components/donwloadCV'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/Footer'));
const Analiticas = lazy(() => import('./components/Analiticas'));


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}> 
        <Analiticas />
        <ArrowTop />
        <Navbar />
        <LandingImage />
        {/* Page */}
        <span id="about"></span>
        <AboutMe />
        <span id="skills"></span>
        <Skills />
        <span id="studies"></span>
        <Studies />
        <span id="experience"></span>
        <Experience />
        <span id="cv"></span>
        <DownloadCV />
        <span id="contact"></span>
        <Contact />
        <Footer/>
      </Suspense>
    </>
  );
}

export default App;
