export default function Studies() {
  return (
    <section id="studies" className="container mx-auto my-10">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Studies
      </h2>
      <div className="text-white flex justify-center flex-col items-center mt-10">
        <h2 className="text-2xl font-bold text-center px-3">Desarrollo Aplicaciones Web (DAW)</h2>
        <div className="grid grid-cols-1 items-center mt-5 px-10 text-center">
          <div>
            <p className="text-xs font-bold italic">
              "Desarrollar, implantar, y mantener aplicaciones web, con independencia del modelo empleado y utilizando
              tecnologías específicas, garantizando el acceso a los datos de forma segura y cumpliendo los criterios de
              accesibilidad, usabilidad y calidad exigidas en los estándares establecidos."
            </p>
          </div>
          <div className=" text-start mt-10">
            <ul className="list-disc pl-10">
              <li>
                Desarrollar e integrar componentes software en el entorno del servidor web, empleando herramientas y
                lenguajes específicos, para cumplir las especificaciones de la aplicación.
              </li>
              <li>
                Desarrollar servicios para integrar sus funciones en otras aplicaciones web, asegurando su
                funcionalidad.
              </li>
              <li>
                Gestionar bases de datos, interpretando su diseño lógico y verificando integridad, consistencia,
                seguridad y accesibilidad de los datos.
              </li>
              <li>
                Desarrollar aplicaciones web con acceso a bases de datos utilizando lenguajes, objetos de acceso y
                herramientas de mapeo adecuados a las especificaciones.
              </li>
              <li>
                Integrar contenidos en la lógica de una aplicación web, desarrollando componentes de acceso a datos
                adecuados a las especificaciones.
              </li>
              <li>
                Desarrollar interfaces en aplicaciones web de acuerdo con un manual de estilo, utilizando lenguajes de
                marcas y estándares web.
              </li>
              <li>
                Desarrollar componentes multimedia para su integración en aplicaciones web, empleando herramientas
                específicas y siguiendo las especificaciones establecidas.
              </li>
              <li>
                Integrar componentes multimedia en el interface de una aplicación web, realizando el análisis de
                interactividad, accesibilidad y usabilidad de la aplicación.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
