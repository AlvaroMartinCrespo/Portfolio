import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Skills() {
  return (
    <section id="skills" className="container mx-auto my-10">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Skills
      </h2>
      <p className="text-center text-white mt-10 font-bold md:mt-5 italic ">"Passion for technology"</p>
      <div className="md:mt-10 flex justify-center py-10 rounded-2xl text-white mx-3">
        <div className="w-2/3 md:w-1/2 ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/next.png" />
              </div>
              <p className="legend">Next.JS</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/html.png" />
              </div>
              <p className="legend">HTML</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/react.png" />
              </div>
              <p className="legend">React.Js</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/js.png" />
              </div>
              <p className="legend">Javascript</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/laravel.png" />
              </div>
              <p className="legend">Laravel</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/php.png" />
              </div>
              <p className="legend">Php</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/css.png" />
              </div>
              <p className="legend">CSS</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/tailwind.png" />
              </div>
              <p className="legend">Tailwind</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/phpmyadmin.png" />
              </div>
              <p className="legend">PhpMyAdmin</p>
            </div>
            <div className="h-[21rem] md:h-auto flex justify-center">
              <div className="md:w-2/3 ">
                <img className="w-10" src="logos/bootstrap.png" />
              </div>
              <p className="legend">Bootstrap</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
