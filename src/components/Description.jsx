import Aos from 'aos';
import { useEffect } from 'react';
import { useState } from 'react';
import { Accordion } from '@rewind-ui/core';
export default function Description() {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Effects
    Aos.init();
    // Fetch user
    const fetchUser = async () => {
      const res = await fetch('https://api.github.com/users/AlvaroMartinCrespo');
      const data = await res.json();
      setUser(data);
    };
    // Call the function
    fetchUser();
    // Fetch projects
    const fetchProjects = async () => {
      const res = await fetch('https://api.github.com/users/AlvaroMartinCrespo/repos');
      const data = await res.json();
      setProjects(data);
    };
    // Call the function
    fetchProjects();
  }, []);

  return (
    <section id="description" className="container mx-auto text-white my-20 md:my-32">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        About Me.
      </h2>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {/* Fetch github data */}
        <div className="flex flex-col items-center justify-center p-8">
          <img className="rounded-xl" data-aos="zoom-out" src={user.avatar_url} alt="me" />
          <h2 className="text-3xl font-bold mt-4">{user.name}</h2>
          <p className="text-center font-bold">{user.location}</p>
        </div>
        <div className="flex flex-col items-center px-8 md:p-8 text-black gap-14">
          <p className="text-white text-center italic">
            "{user.bio} using JavaScript and its various frameworks. JavaScript is a versatile programming language that
            allows me to add functionality, interactivity, and responsiveness to web pages."
          </p>
          <h2 className="text-white italic text-2xl font-bold text-start">Projects</h2>
          <Accordion
            defaultItem="item-1"
            activeColor="dark"
            bordered={false}
            color="slate"
            radius="lg"
            shadowColor="gray"
            withRing={false}
          >
            {projects
              .filter(
                (project) =>
                  project.name === 'howeb' ||
                  project.name === 'redSocial' ||
                  project.name === 'ReactProjects' ||
                  project.name === 'AppDates'
              )
              .map((project) => (
                <Accordion.Item key={project.id} anchor={project.id}>
                  <Accordion.Header className="font-bold">{project.name}</Accordion.Header>
                  <Accordion.Body>
                    <p>{project.description}</p>
                    <span className="text-xs font-bold">
                      Languaje: {project.language === 'Blade' ? 'Php (Laravel)' : project.language}
                    </span>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
          </Accordion>
        </div>
      </div>
      <a className="hover:underline mx-8" target="_blank" href="https://github.com/AlvaroMartinCrespo">
        <span className="text-xs italic">Fetched from GitHub</span>
      </a>
    </section>
  );
}
