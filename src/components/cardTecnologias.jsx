import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function cardTecnologia() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="flex justify-center items-center w-full">
      <Slider {...settings} className="w-[40rem] m-[5rem] flex justify-center items-center gap-10">
        <div className="text-white h-64 text-center ">
          <img src="/svg/js.svg" alt="javascript" />
          <span>Javascript</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/html.svg" alt="html" />
          <span>HTML</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/css.svg" alt="css" />
          <span>CSS</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/laravel.svg" alt="laravel" />
          <span>Laravel</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/mysql.svg" alt="mysql" />
          <span>Mysql</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/php.svg" alt="php" />
          <span>Php</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/react.svg" alt="react" />
          <span>React</span>
        </div>
        <div className="text-white h-64 text-center ">
          <img src="/svg/tailwind.svg" alt="tailwind" />
          <span>Tailwind</span>
        </div>
      </Slider>
    </div>
  );
}
