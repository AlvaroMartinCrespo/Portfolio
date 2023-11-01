import { useEffect } from 'react';
import Typed from 'typed.js';

export default function LandingImage() {
  useEffect(() => {
    // TypedJs
    const el = document.getElementById('typed');
    const typed = new Typed(el, {
      strings: ['WELCOME!'],
      backDelay: 1000,
      backSpeed: 50,
      typeSpeed: 100,
      cursorChar: '',
    });
    // Destroy instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section>
        <img className="object-cover w-screen h-[100vh]" src="./img/landing.jpg" alt="image-landing" />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full ">
          <div className="flex justify-center items-center h-screen flex-col gap-5">
            <p id="typed" className="text-white md:text-9xl text-6xl font-bold drop-shadow-xl">
              WELCOME!
            </p>
            <p className="text-white md:text-5xl text-2xl font-bold drop-shadow-md text-center p-5">To my Portfolio.</p>
            <a
              href="#contact"
              className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition-all ease-in-out duration-200 hover:scale-105"
            >
              Contact Me
            </a>
            <div className="flex flex-col items-center mt-8">
              <div className="relative w-6 h-6 mt-2">
                <div className="absolute w-10 h-10 top-0 animate-bounce">
                  <svg
                    className="text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 10l7 7m0 0l7-7m-7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
