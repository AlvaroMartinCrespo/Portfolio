export default function experience() {
  return (
    <div className="flex flex-col justify-start items-center my-[5rem] w-full text-white">
      <div className="flex flex-col items-center justify-between">
        <div class="flex items-center mb-8 gap-10">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-white h-10 w-10 rounded-full"></div>
            <h3 className="text-lg font-bold">2023</h3>
          </div>

          <div>
            <h1 className="text-2xl font-bold font-mono">
              <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 font-bold text-transparent bg-clip-text mt-10">
                Diseñador Web (Front-End) en DSS Network
              </span>
            </h1>
            <p className="font-bold font-mono"> - Maquetación de páginas web en HTML y CSS</p>
            <p className="font-bold font-mono"> - Animaciones con Javascript (Jquery)</p>
            <p className="font-bold font-mono"> - Uso de Bootstrap</p>
          </div>
        </div>
      </div>
      <div id="conexion" class="flex justify-center h-80">
        <div class="w-0.5 bg-white"></div>
      </div>
      <div className="flex flex-col items-center justify-between mt-[2rem]">
        <div class="flex items-center mb-8 gap-10">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-white h-10 w-10 rounded-full"></div>
            <h3 className="text-lg font-bold">2021 - 2023</h3>
          </div>
          <div>
            <h1 className="text-2xl font-bold font-mono">
              <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 font-bold text-transparent bg-clip-text mt-10">
                Desarrollo de Aplicaciones web (DAW)
              </span>
            </h1>
            <p className="font-bold font-mono "> - Desarrollo en Javascript</p>
            <p className="font-bold font-mono">
              {' '}
              - Desarrollo en Php (Framework{' '}
              <span className="bg-gradient-to-r from-red-200 to-red-600 font-bold text-transparent bg-clip-text mt-10">
                Laravel
              </span>
              )
            </p>
            <p className="font-bold font-mono"> - Diseño Web (HTML5 y CSS3)</p>
            <p className="font-bold font-mono"> - Uso de MySql</p>
          </div>
        </div>
      </div>
    </div>
  );
}
