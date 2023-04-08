import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';
import Separacion from './components/Separacion';
import Proyectos from './components/Projects';
import Analiticas from './components/Analiticas';
import Tecnologias from './components/cardTecnologias';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
      <div id="top" />
      <header className="flex justify-center items-center my-14 ">
        <Nav />
      </header>
      <main className="flex justify-center items-center my-12 flex-col">
        <section id="presentacion" className="presentacion my-12">
          <Presentacion />
        </section>

        <Separacion />

        <section className="portfolio my-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-center text-5xl font-bold font-mono">
              <span className="bg-gradient-to-r from-gray-600 via-purple-900 to-violet-600 font-bold text-transparent bg-clip-text mt-10">
                Projects
              </span>
            </h1>
          </div>
          <Proyectos />
        </section>

        <Separacion />

        {/* Tecnologías */}
        <section id="tecnologia" className="tecnologias my-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-center text-5xl font-bold font-mono">
              <span className="bg-gradient-to-r from-gray-600 via-purple-900 to-violet-600 font-bold text-transparent bg-clip-text mt-10">
                Tecnologías
              </span>
            </h1>
          </div>
          <div className="w-full">
            <Tecnologias />
          </div>
        </section>

        <Separacion />

        {/* Experiencia */}
        <section id="experiencia" className="tecnologias my-16">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-center text-5xl font-bold font-mono">
              <span className="bg-gradient-to-r from-gray-600 via-purple-900 to-violet-600 font-bold text-transparent bg-clip-text mt-10">
                Experiencia
              </span>
            </h1>
          </div>
          <div className="w-full">
            <Experience />
          </div>
        </section>
      </main>
      <Analiticas />
      <footer className="bg-gray-800 text-white py-4 bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
