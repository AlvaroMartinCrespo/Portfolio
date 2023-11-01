import './App.css';
import Navbar from './components/navbar';
import LandingImage from './components/landingImage';
import ArrowTop from './components/arrowTop';
import AboutMe from './components/aboutMe';
// import Skills from './components/Skills';
import Studies from './components/studies';
import Experience from './components/experience';
import DownloadCV from './components/donwloadCV';
import Contact from './components/contact';
import Footer from './components/footer';

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
      {/* <Skills /> */}
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
