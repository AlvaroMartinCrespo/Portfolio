import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Skills() {
  return (
    <section className="container mx-auto my-10">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Skills
      </h2>
      <div className="mt-14 flex justify-center bg-slate-900 py-10 rounded-xl text-white ">
        <div className="w-2/3 md:w-1/2 ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            <div>
              <img className="w-10" src="logos/next.png" />
              <p className="legend">Next.JS</p>
            </div>
            <div>
              <img className="w-10" src="logos/html.png" />
              <p className="legend">HTML</p>
            </div>
            <div>
              <img className="w-10" src="logos/react.png" />
              <p className="legend">React.Js</p>
            </div>
            <div>
              <img className="w-10" src="logos/js.png" />
              <p className="legend">Javascript</p>
            </div>
            <div>
              <img className="w-10" src="logos/laravel.png" />
              <p className="legend">Laravel</p>
            </div>
            <div>
              <img className="w-10" src="logos/php.png" />
              <p className="legend">Php</p>
            </div>
            <div>
              <img className="w-10" src="logos/css.png" />
              <p className="legend">CSS</p>
            </div>
            <div>
              <img className="w-10" src="logos/tailwind.png" />
              <p className="legend">Tailwind</p>
            </div>
            <div>
              <img className="w-10" src="logos/phpmyadmin.png" />
              <p className="legend">PhpMyAdmin</p>
            </div>
            <div>
              <img className="w-10" src="logos/bootstrap.png" />
              <p className="legend">Bootstrap</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
