import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="flex justify-center items-center my-14 ">
        <Nav />
      </header>
      <main className="flex justify-center items-center my-16">
        {/* Presentación */}
        <section className="presentacion my-16">
          <Presentacion />
        </section>

        {/* Portofolio */}
        <section className="portfolio"></section>

        {/* Tecnologías */}
        <section className="tecnologias"></section>
        {/* <img
          src="https://images.coches.com/_vn_/kia/Sportage/c399cf1d98a95d24f8e8715dd0b13fb2.jpg?p=cc_vn_high"
          alt="cohe"
        /> */}
      </main>
      <footer className="bg-gray-800 text-white py-4 bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
