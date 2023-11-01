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
      <section className="container px-auto my-0 lg:my-16">
        <div className="flex justify-center flex-col items-center lg:flex-row gap-10 ">
          {projects
            .filter(
              (project) =>
                project.name === 'howeb' ||
                project.name === 'kahoot-app' ||
                project.name === 'weather-api' ||
                project.name === 'new-tech'
            )
            .map((project) => (
              <>
                <div
                  key={project.id}
                  className="rounded lg:grayscale hover:grayscale-0 ease-in-out transition-all duration-300 hover:cursor-pointer"
                >
                  <div className="flex justify-center mb-5">
                    <span className="uppercase font-bold">{project.name}</span>
                  </div>
                  <a target="_blank" rel="noreferrer" href={'https://github.com/AlvaroMartinCrespo/' + project.name}>
                    <img
                      className="rounded-xl hover:scale-105 transition-all ease-in-out duration-300 shadow-lg w-[50rem] h-[20rem] object-cover"
                      src={'projects/' + project.name + '.png'}
                      alt={project.name}
                    />
                  </a>
                </div>
              </>
            ))}
        </div>
      </section>
    </>
  );
}
