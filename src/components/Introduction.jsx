import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Introduction() {
  useEffect(() => {
    // Animations
    AOS.init();
    // TypedJs
    const el = document.getElementById('typed');
    const typed = new Typed(el, {
      strings: ['FullStack Developer'],
      backDelay: 1000,
      backSpeed: 50,
      typeSpeed: 100,
    });
    // Destroy instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="container mx-auto text-white mt-10 mb-52">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="p-5 flex flex-col items-center justify-center gap-14">
          <p className="text-5xl md:text-6xl text-center font-bold text-slate-400  ">Álvaro Martín Crespo</p>
          <div className="flex justify-center items-center my-10 md:my-5">
            <span
              id="typed"
              className="text-3xl text-center font-mono bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 text-transparent bg-clip-text "
            ></span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="absolute md:w-[50%]">
            <img
              data-aos="fade-right"
              className="w-full scale-0"
              src="../../public/img/splashWhite.png"
              alt="splashWhite"
            />
          </div>
          <div className="z-50 flex justify-center">
            <img className="w-[60%] md:w-[70%]" src="../../public/img/ejemploMe.png" alt="me" />
          </div>
        </div>
      </div>
    </section>
  );
}
