import { Modal } from '@rewind-ui/core';
import { useState } from 'react';
export default function ModalCom() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        overlayOpacity="75"
        position="center"
        radius="lg"
        shadow="md"
        size="xl"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="w-full h-full bg-slate-800 text-white p-4">
          <ul className="list-disc pl-10">
            <li>
              Desarrollar e integrar componentes software en el entorno del servidor web, empleando herramientas y
              lenguajes específicos, para cumplir las especificaciones de la aplicación.
            </li>
            <li>
              Desarrollar servicios para integrar sus funciones en otras aplicaciones web, asegurando su funcionalidad.
            </li>
            <li>
              Gestionar bases de datos, interpretando su diseño lógico y verificando integridad, consistencia, seguridad
              y accesibilidad de los datos.
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
          </ul>
        </div>
      </Modal>
      <button
        className="text-amber-400 font-bold py-2 px-4 rounded-lg shadow-md bg-slate-800 hover:bg-slate-600"
        onClick={() => setOpen(true)}
      >
        Competencias
      </button>
    </>
  );
}
