export default function AboutMe() {
  return (
    <>
      <section className="container mx-auto my-10 p-10 flex flex-col gap-5">
        <div>
          <h2 className="font-extrabold text-4xl">ABOUT ME</h2>
        </div>
        <div className="flex justify-between md:items-center md:flex-row flex-col gap-5 md:p-3 lg:p-10">
          <div>
            <div className="flex justify-center gap-5">
              <h2 className="font-bold text-blue-300 text-3xl lg:text-7xl">Developer.</h2>
              <h2 className="font-bold text-blue-300 text-3xl lg:text-7xl">Frontend.</h2>
            </div>
            <div className="flex justify-start lg:justify-end gap-5">
              <h2 className="font-bold text-blue-300 text-3xl lg:text-7xl">Backend.</h2>
              <h2 className="font-bold text-blue-300 text-3xl lg:text-7xl">Designer.</h2>
            </div>
            <div className="my-5 text-xl">
              <p className="md:p-6">
                <span className="font-bold text-blue-300">Hello,</span> I am a web developer with a strong background in
                web application development. My passion for learning and my self-taught nature have allowed me to stay
                updated on the latest trends and advancements in the world of web development.
              </p>
              <p className="md:p-6">
                I am fluent in classics like <span className="font-bold text-blue-300">Javascrit</span>,{' '}
                <span className="font-bold text-blue-300">Php</span> and{' '}
                <span className="font-bold text-blue-300">Java</span>
              </p>
              <p className="md:p-6">
                Whenever possible, I also apply my passion for developing products with{' '}
                <span className="font-bold text-blue-300">Modern Javascript Library</span> and{' '}
                <span className="font-bold text-blue-300">Frameworks like React.js</span> and{' '}
                <span className="font-bold text-blue-300">Next.js</span>
              </p>
            </div>
          </div>
          <div>
            <img className="rounded lg:w-[50rem]" src="./img/me.jpg" alt="me" />
          </div>
        </div>
        <div className="flex justify-center gap-10 pt-10">
          <a
            href="https://github.com/AlvaroMartinCrespo"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition-all ease-in-out duration-200 hover:scale-105 hover:cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADn-crespo-bb9aa5246/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition-all ease-in-out duration-200 hover:scale-105 hover:cursor-pointer"
          >
            Linkedin
          </a>
        </div>
      </section>
    </>
  );
}
