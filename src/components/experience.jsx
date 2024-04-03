import PersonalProjects from './personalProjects';
export default function Experience() {
  return (
    <>
      <section className="bg-slate-200">
        <div className="container mx-auto my-10 p-10">
          <div>
            <h2 className="font-extrabold text-4xl">EXPERIENCE</h2>
          </div>
          <section className="">
            <div className="py-10">
              <h2 className="font-bold text-xl lg:text-3xl">June 2023 - Present</h2>
            </div>
            <div className="flex  items-center gap-3 justify-center">
              <div className="bg-green-500 h-3 w-3 lg:h-5 lg:w-5 rounded-full"></div>
              <h3 className="font-bold text-2xl">PERSONAL PROJECTS</h3>
            </div>
            <div className="lg:p-10">
              <p className="text-xl my-10 lg:my-0 lg:px-20">
                Through self-learning, I have carried out projects in ReactJs and NextJs with the aim of expanding my
                knowledge around JavaScript frameworks. Likewise, I have gained experience in the use of new
                technologies, such as Tailwind for CSS style management, MongoDB and Supabase for database
                administration, authentication systems, and various JavaScript libraries. <br />
                <br /> Here are some of my projects:
              </p>
              <div className="flex justify-center lg:m-10 mb-10 flex-col items-center">
                <div className="rounded lg:grayscale hover:grayscale-0 ease-in-out transition-all duration-300 hover:cursor-pointer">
                  <div className="flex justify-center mb-5 flex-col items-center">
                    <span className="uppercase font-bold">Academy</span>
                    <span>
                      Explore my Angular-based project with Firebase login. Seamlessly blending Angular's power with
                      Firebase's secure authentication, it offers a user-friendly experience. Join in to witness the
                      fusion of modern web technologies.
                    </span>
                  </div>
                  <a
                    className="flex justify-center"
                    target="_blank"
                    rel="noreferrer"
                    href={'https://lolacademy.vercel.app/'}
                  >
                    <img
                      className="rounded-xl hover:scale-105 transition-all ease-in-out duration-300 shadow-lg w-[50rem] h-[20rem] object-cover"
                      src={'projects/academy.png'}
                      alt={'academy'}
                    />
                  </a>
                </div>
              </div>
              <div>
                <PersonalProjects />
              </div>
              <div className="flex justify-center lg:justify-start my-5  ">
                <a
                  href="https://github.com/AlvaroMartinCrespo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs italic underline"
                >
                  Fetched from GitHub
                </a>
              </div>
            </div>
            <div className="py-10">
              <h2 className="font-bold text-xl lg:text-3xl">February 2022 - March 2024</h2>
            </div>
            <div className="flex  items-center gap-3 justify-center">
              <div className="bg-green-500 h-3 w-3 lg:h-5 lg:w-5 rounded-full"></div>
              <h3 className="font-bold text-2xl">AGILIRO</h3>
            </div>
            <div className="lg:p-10 flex justify-center flex-col lg:flex-row">
              <div className="my-10 lg:my-0">
                <img className="rounded-xl w-[40rem]" src="./img/agiliro.png" alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-xl lg:px-10 mb-10">
                  Company where I worked during the second year of study of the degree in Web Application Development,
                  and during this year.During this time, I developed my skills in the following areas:
                </p>
                <p className="text-xl lg:px-12">
                  ● Creation of websites with an attractive and adaptable design (responsive design).
                </p>
                <p className="text-xl lg:px-12">
                  ● Perfeccionamiento en el uso de HTML5 y CSS3, incluyendo frameworks como Bootstrap.
                </p>
                <p className="text-xl lg:px-12">
                  ● Expansión de habilidades en JavaScript y PHP para agregar funcionalidades dinámicas.
                </p>
                <p className="text-xl lg:px-12">● Demonstrated ability to collaborate effectively in a team.</p>
              </div>
            </div>
            <div className="py-10">
              <h2 className="font-bold text-xl lg:text-3xl">March 2023 - June 2023</h2>
            </div>
            <div className="flex  items-center gap-3 justify-center">
              <div className="bg-green-500 h-3 w-3 lg:h-5 lg:w-5 rounded-full"></div>
              <h3 className="font-bold text-2xl">DSS Network</h3>
            </div>
            <div className="lg:p-10 flex justify-center flex-col lg:flex-row">
              <div className="my-10 lg:my-0">
                <img className="rounded-xl w-[40rem]" src="./img/dssnetwork.png" alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-xl lg:px-10 mb-10">
                  Company where I did my degree internship focused on development. During this time, I developed my
                  skills in the following areas:
                </p>
                <p className="text-xl lg:px-12">
                  ● Development of page design skills and adaptability to different screens.
                </p>
                <p className="text-xl lg:px-12">● Improved knowledge in HTML5 and CSS3 (including Bootstrap).</p>
                <p className="text-xl lg:px-12">● Improved knowledge in Javascript (along with the use of JQuery).</p>
                <p className="text-xl lg:px-12">● Teamwork.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
