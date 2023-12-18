import { useState } from 'react';
import Modal from './modal';
export default function Studies() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className="container mx-auto my-10 p-10 ">
        <div>
          <h2 className="font-extrabold text-4xl">STUDIES</h2>
        </div>
        <div className="flex  gap-5 justify-start my-10 lg:px-10 flex-col">
          <div className="flex justify-start gap-5 items-center">
            <div className="bg-green-500 h-3 w-8 lg:h-6 lg:w-6 rounded-full"></div>
            <div>
              <h2 className="font-bold text-black text-xl lg:text-3xl ">
                WEB APPLICATION DEVELOPMENT (WAD) / DESARROLLO DE APLICACIONES WEB (DAW)
              </h2>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              onClick={openModal}
              className="bg-blue-200 w-[10rem] text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition-all ease-in-out duration-200 hover:scale-105"
            >
              Competencies
            </button>
            <Modal showModal={showModal} closeModal={closeModal} />
          </div>
        </div>
        <div className="flex items-center gap-5 justify-start my-10 lg:px-10">
          <div className="bg-green-500 h-3 w-7 lg:h-6 lg:w-6 rounded-full"></div>
          <div>
            <h2 className="font-bold text-black text-xl lg:text-3xl ">
              <a
                className="hover:underline lg:no-underline underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/learning/certificates/edbcb204ed6d85ca5986554ddc2c05a99ccc8e6f5e68dff6d7809a93ce4905a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B4sXzSkkOQjiumQI%2FesXxbw%3D%3D"
              >
                FUNDAMENTOS PROFESIONALES DE DESARROLLO DE SOFTWARE (Link)
              </a>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-start my-10 lg:px-10">
          <div className="bg-green-500 h-3 w-6 lg:h-6 lg:w-6 rounded-full"></div>
          <div>
            <h2 className="font-bold text-black text-xl lg:text-3xl ">
              <a
                className="hover:underline lg:no-underline underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/fcc9440f97a-bec0-43a7-ba32-d6b65bbea670/javascript-algorithms-and-data-structures"
              >
                ALGORITMOS EN JAVASCRIPT Y ESTRUCTURAS DE DATOS (Link)
              </a>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-start my-10 lg:px-10">
          <div className="bg-green-500 h-3 w-6 lg:h-6 lg:w-6 rounded-full"></div>
          <div>
            <h2 className="font-bold text-black text-xl lg:text-3xl ">
              <a
                className="hover:underline lg:no-underline underline"
                target="_blank"
                rel="noreferrer"
                href="https://freecodecamp.org/certification/fcc9440f97a-bec0-43a7-ba32-d6b65bbea670/front-end-development-libraries"
              >
                Front End Development Libraries (Link)
              </a>
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-start my-10 lg:px-10">
          <div className="bg-green-500 h-3 w-3 lg:h-6 lg:w-6 rounded-full"></div>
          <div>
            <h2 className="font-bold text-black text-xl lg:text-3xl ">
              <a
                className="hover:underline lg:no-underline underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.freecodecamp.org/certification/fcc9440f97a-bec0-43a7-ba32-d6b65bbea670/responsive-web-design"
              >
                DISEÑO RESPONSIVO (Link)
              </a>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
