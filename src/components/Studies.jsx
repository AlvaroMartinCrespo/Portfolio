import ModalCom from './ModalCom';

export default function Studies() {
  return (
    <section id="studies" className="container mx-auto my-10">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Studies
      </h2>
      <div className="text-white flex justify-center flex-col items-center mt-10">
        <div className="flex justify-center items-center">
          <span className="w-[15px] h-[15px] bg-green-500 rounded-full"></span>
          <h2 className="text-2xl font-bold text-center px-3">Desarrollo Aplicaciones Web (DAW)</h2>
        </div>

        <div className="grid grid-cols-1 items-center mt-5 px-14 text-center ">
          <div>
            <p className="md:px-10 font-bold">
              "Desarrollar, implantar, y mantener aplicaciones web, con independencia del modelo empleado y utilizando
              tecnologías específicas, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de
              accesibilidad, usabilidad y calidad exigidas en los estándares establecidos."
            </p>
          </div>
          <div className="flex justify-center mt-10 flex-col items-center">
            <span className="mb-4">Aquí puede ver las competencias de dicho grado.</span>
            <ModalCom />
          </div>
        </div>
      </div>
    </section>
  );
}
