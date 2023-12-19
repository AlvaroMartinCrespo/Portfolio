import { useState } from 'react';
import { useEffect } from 'react';
export default function PersonalProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
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
    <>
      <section className="container mx-auto my-0 lg:my-16">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {projects
            .filter((project) => ['howeb', 'kahoot-app', 'weather-api', 'tasks'].includes(project.name))
            .map((project) => (
              <div
                key={project.id}
                className="rounded lg:grayscale hover:grayscale-0 ease-in-out transition-all duration-300 hover:cursor-pointer"
              >
                <div className="flex flex-col justify-center mb-5 items-center">
                  <span className="uppercase font-bold">{project.name}</span>
                  <span>{project.description}</span>
                </div>
                <a target="_blank" rel="noreferrer" href={'https://github.com/AlvaroMartinCrespo/' + project.name}>
                  <img
                    className="rounded-xl hover:scale-105 transition-all ease-in-out duration-300 shadow-lg w-full lg:w-[50rem] h-[20rem] object-cover"
                    src={'projects/' + project.name + '.png'}
                    alt={project.name}
                  />
                </a>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
