export default function Presentacion() {
  return (
    <div className="flex justify-center items-center gap-34">
      <div className="flex justify-center flex-col items-center w-1/2">
        <h1 className="text-center text-5xl font-bold font-mono">
          <span className="bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 font-bold text-transparent bg-clip-text mt-10">
            Hi, I'm Álvaro Martín
          </span>
        </h1>
        <h2 className="text-center text-gray-300 text-2xl font-bold font-mono">Frontend Developer</h2>
        <span className="text-center text-gray-400 text-lg font-bold font-mono mt-10">
          Web developer passionate about React and JavaScript, always learning
        </span>
        <p className="text-center text-lg font-bold font-mono mt-10 w-2/3 bg-gradient-to-r from-slate-500 to-yellow-100 text-transparent bg-clip-text">
          I'm passionate about learning new skills and technologies to improve my abilities and make my projects even
          better. I'm focused on creating interactive and dynamic web applications that provide an excellent user
          experience.
        </p>
        <a
          href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADn-crespo-bb9aa5246/"
          target="_blank"
          className=" mt-9 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Let`s Talk
        </a>
      </div>
      <img className="w-60 rounded-md" src="../public/img/img-presentacion.jpg" alt="img-presentacion" />
    </div>
  );
}
