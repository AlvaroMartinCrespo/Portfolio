import './App.css';
import Footer from './components/Footer';
import Analiticas from './components/Analiticas';
import Introduction from './components/Introduction';
import ButtonScrollUp from './components/buttonScrollUp';
import SeparationSection from './components/SeparationSection';
import AsideBar from './components/AsideBar';
import Description from './components/Description';
import Links from './components/links';
import DownloadCV from './components/cv';
import Jobs from './components/Jobs';
import Studies from './components/Studies';
import Skills from './components/Skills';

function App() {
  return (
    <main className="App">
      <AsideBar />
      <ButtonScrollUp />
      <Analiticas />
      <Introduction />
      <Description />
      <Skills />
      <Studies />
      <Jobs />
      <Links />
      <DownloadCV />
      <Footer />
    </main>
  );
}

export default App;
