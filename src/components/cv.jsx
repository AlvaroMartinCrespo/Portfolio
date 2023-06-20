import Cv from '../../public/pdf/AlvaroMartinCrespoCV.pdf';
export default function DownloadCV() {
  const handleDownload = () => {};

  return (
    <section id='download' className="container mx-auto my-10 text-white">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        DownloadCV
      </h2>
      <div className="grid grid-cols-1 justify-items-center p-10">
        <p className="text-center font-bold italic">
          Feel free to download my resume to learn more about my background and qualifications.
        </p>
        <button
          onClick={handleDownload}
          className="text-amber-400 font-bold py-2 px-4 rounded-lg shadow-md bg-slate-800 hover:bg-slate-600 mt-10"
        >
          <a href={Cv} download="AlvaroMartinCrespoCV">
            Download
          </a>
        </button>
      </div>
    </section>
  );
}
