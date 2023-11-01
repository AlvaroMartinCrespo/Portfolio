import './style/navbar.css';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Effect navbar
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        navbar.classList.add('p-5');
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-slate-200');
        navbar.classList.remove('opacity-60');
      } else {
        navbar.classList.remove('p-5');
        navbar.classList.remove('bg-white');
        navbar.classList.add('bg-slate-200');
        navbar.classList.add('opacity-60');
      }
    });
  });

  // To scroll
  const scroll = (e) => {
    const element = e.target.innerText;
    if (element === 'About Me') {
      const elemToScroll = document.getElementById('about');
      elemToScroll.scrollIntoView({ behavior: 'smooth' });
    } else if (element === 'Skills') {
      const elemToScroll = document.getElementById('skills');
      elemToScroll.scrollIntoView({ behavior: 'smooth' });
    } else if (element === 'Studies') {
      const elemToScroll = document.getElementById('studies');
      elemToScroll.scrollIntoView({ behavior: 'smooth' });
    } else if (element === 'Experience') {
      const elemToScroll = document.getElementById('experience');
      elemToScroll.scrollIntoView({ behavior: 'smooth' });
    } else if (element === 'CV') {
      const elemToScroll = document.getElementById('cv');
      elemToScroll.scrollIntoView({ behavior: 'smooth' });
    } else if (element === 'Contact') {
      const elemToScroll = document.getElementById('contact');
      elemToScroll.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section
        id="navbar"
        className="shadow-xl md:fixed hidden md:block w-screen bg-white z-50 p-5 transition-all ease-in-out duration-200 rounded-b-xl hover:p-5 hover:bg-white hover:opacity-100"
      >
        <div className="flex justify-evenly items-center">
          <div className="">
            <a onClick={scroll} className="hover:cursor-pointer">
              <img className="w-14" src="logo.png" alt="logo-page" />
            </a>
          </div>
          <div className="flex">
            <ul className="flex gap-14">
              <a
                onClick={scroll}
                className="text-xl link link-underline link-underline-black text-black flex items-center hover:cursor-pointer"
              >
                About Me
              </a>
              <a
                onClick={scroll}
                className="text-xl link link-underline link-underline-black text-black flex items-center hover:cursor-pointer"
              >
                Skills
              </a>
              <a
                onClick={scroll}
                className="text-xl link link-underline link-underline-black text-black flex items-center hover:cursor-pointer"
              >
                Studies
              </a>
              <a
                onClick={scroll}
                className="text-xl link link-underline link-underline-black text-black flex items-center hover:cursor-pointer"
              >
                Experience
              </a>
              <a
                onClick={scroll}
                className="text-xl link link-underline link-underline-black text-black flex items-center hover:cursor-pointer"
              >
                CV
              </a>
              <a
                onClick={scroll}
                className="text-xl link link-underline link-underline-black text-black flex items-center hover:cursor-pointer"
              >
                Contact
              </a>
            </ul>
          </div>
        </div>
      </section>
      <section className="fixed z-50 m-3 shadow-lg">
        <div className="flex md:hidden bg-slate-200 rounded">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden z-50 bg-slate-200 rounded`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              onClick={scroll}
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </a>
            <a
              onClick={scroll}
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              onClick={scroll}
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Studies
            </a>
            <a
              onClick={scroll}
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </a>
            <a
              onClick={scroll}
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              CV
            </a>
            <a
              onClick={scroll}
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
