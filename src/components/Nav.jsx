import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    navbar.addEventListener('mouseover', () => {
      navbar.classList.remove('backdrop-blur-sm');
      navbar.classList.remove('bg-opacity-50');
    });
    navbar.addEventListener('mouseout', () => {
      navbar.classList.add('backdrop-blur-sm');
      navbar.classList.add('bg-opacity-50');
    });
    return () => {};
  }, []);

  return (
    <div
      id="navbar"
      className=" fixed top-4 flex justify-between items-center gap-3 px-10 h-16 bg-slate-700 rounded-md backdrop-blur-sm bg-opacity-50 "
    >
      <img className="w-10 h-auto" src="img/favicon.ico" alt="logo" />
      <nav className="text-white ">
        <ul className="flex justify-center items-center gap-5">
          <li className="m-2">
            <Link
              className="cursor-pointer p-3 rounded-md  transition duration-300 hover:bg-slate-900"
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Inici
            </Link>
          </li>
          <li className="m-2">
            <Link
              className="cursor-pointer p-3 rounded-md  transition duration-300 hover:bg-slate-900"
              activeClass="active"
              to="presentacion"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Presentación
            </Link>
          </li>
          <li className="m-2">
            <Link
              className="cursor-pointer p-3 rounded-md  transition duration-300 hover:bg-slate-900"
              activeClass="active"
              to="tecnologia"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Tecnologías
            </Link>
          </li>
          <li className="m-2">
            <Link
              className="cursor-pointer p-3 rounded-md  transition duration-300 hover:bg-slate-900"
              activeClass="active"
              to="experiencia"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experiencia
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
