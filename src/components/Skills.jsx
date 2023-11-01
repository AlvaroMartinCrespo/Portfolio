import Card from './card';
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
  ];

  return (
    <>
      <section className=" bg-blue-200">
        <div className="container mx-auto p-10">
          <div className="mb-10">
            <h2 className="font-extrabold text-4xl">SKILLS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
            {skills.map((skill) => (
              <Card key={skill.name} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
