import './App.css';
import Navbar from './components/navbar';
import LandingImage from './components/landingImage';
import ArrowTop from './components/arrowTop';
import AboutMe from './components/aboutMe';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Experience from './components/Experience';
import DownloadCV from './components/DonwloadCV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default App;
