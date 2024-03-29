import Card from './Card';
import { useState } from 'react';
export default function Skills() {
  const skills = [
    {
      name: 'HTML',
      image: './logos/html.png',
    },
    {
      name: 'CSS',
      image: './logos/css.png',
    },
    {
      name: 'BOOTSTRAP',
      image: './logos/bootstrap.png',
    },
    {
      name: 'JS',
      image: './logos/js.png',
    },
    {
      name: 'LARAVEL',
      image: './logos/laravel.png',
    },
    {
      name: 'NEXT',
      image: './logos/next.png',
    },
    {
      name: 'PHP',
      image: './logos/php.png',
    },
    {
      name: 'PHPMYADMIN',
      image: './logos/phpmyadmin.png',
    },
    {
      name: 'REACT',
      image: './logos/react.png',
    },
    {
      name: 'TAILWIND',
      image: './logos/tailwind.png',
    },
    {
      name: 'ANGULAR',
      image: './logos/angular.png',
    },
    {
      name: 'TYPESCRIPT',
      image: './logos/typescript.png',
    },
    {
      name: 'FIREBASE',
      image: './logos/firebase.png',
    },
  ];

  const initialSkillsToShow = 5;
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState(skills.slice(0, initialSkillsToShow));

  const handleShowMoreSkills = () => {
    setVisibleSkills(skills);
    setShowAllSkills(true);
  };

  const handleShowLessSkills = () => {
    setVisibleSkills(skills.slice(0, initialSkillsToShow));
    setShowAllSkills(false);
  };

  return (
    <>
      <section className="bg-blue-200">
        <div className="container mx-auto p-10">
          <div className="mb-10">
            <h2 className="font-extrabold text-4xl">SKILLS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
            {visibleSkills.map((skill) => (
              <Card key={skill.name} name={skill.name} image={skill.image} />
            ))}
          </div>
          {!showAllSkills && (
            <div className="mt-5 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleShowMoreSkills}
              >
                Mostrar más habilidades
              </button>
            </div>
          )}
          {showAllSkills && (
            <div className="mt-5 text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleShowLessSkills(skills)}
              >
                Mostrar menos habilidades
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
