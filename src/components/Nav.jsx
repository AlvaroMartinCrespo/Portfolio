export default function Nav() {
  return (
    <div className="fixed top-4 flex justify-between items-center gap-3 px-10 h-16 bg-slate-700 rounded-md backdrop-blur-sm bg-opacity-50 ">
      <img className="w-10 h-auto" src="../public/img/favicon.ico" alt="logo" />
      <nav className="text-white ">
        <ul className="flex justify-center items-center gap-5">
          <li className="m-2">
            <a className="p-3 rounded-md  transition duration-300 hover:bg-slate-900" href="">
              Inicio
            </a>
          </li>
          <li className="m-2">
            <a className="p-3 rounded-md  transition duration-300 hover:bg-slate-900" href="">
              Portfolio
            </a>
          </li>
          <li className="m-2">
            <a className="p-3 rounded-md  transition duration-300 hover:bg-slate-900" href="">
              Tecnologías
            </a>
          </li>
          <li className="m-2">
            <a className="p-3 rounded-md  transition duration-300 hover:bg-slate-900" href="">
              Experiencia
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
