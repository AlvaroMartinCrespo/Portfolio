import cv from '/cv/cv.pdf?url';

export default function DownloadCV() {
  const handleDownload = () => {};

  return (
    <section className="container mx-auto my-10 p-10">
      <div>
        <h2 className="font-extrabold text-4xl">DOWNLOAD CV</h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center pt-10">
        <div>
          <img className="mb-10" src="img/curriculum.png" alt="curriculum" />
        </div>
        <p className="text-center  text-xl">
          Feel free to download my resume to learn more about my background and qualifications.
        </p>
        <button
          onClick={handleDownload}
          className="bg-blue-200 w-[10rem] text-black font-bold py-2 px-4 rounded hover:bg-blue-300 transition-all ease-in-out duration-200 hover:scale-105 mt-10"
        >
          <a href={cv} download="AlvaroMartinCrespoCV">
            Download
          </a>
        </button>
      </div>
    </section>
  );
}
