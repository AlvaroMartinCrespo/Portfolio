import Card from './Card';
export default function Links() {
  const links = [
    {
      name: 'Github',
      url: 'https://github.com/AlvaroMartinCrespo',
      description: 'Projects I have worked on: React.js, Next.js, Laravel, and MongoDB.',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADn-crespo-bb9aa5246/',
      description: 'Professional Experience, Education, Titles Achieved, and Certifications',
      image: 'https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png',
    },
  ];
  return (
    <section id='links' className="container mx-auto my-10 text-white">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Links
      </h2>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 p-10 gap-10 md:gap-20 ">
        {links.map((link) => (
          <Card name={link.name} url={link.url} description={link.description} image={link.image} />
        ))}
      </div>
    </section>
  );
}
