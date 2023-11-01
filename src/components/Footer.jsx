export default function Footer() {
  return (
    <>
      <div className="bg-blue-200">
        <footer className="bg-gray-800 text-white p-4 rounded-t-xl">
          <div className="flex flex-col md:flex-row justify-center items-center lg:gap-36">
            <div className="mb-4 md:mb-0">
              <p className="text-center md:text-left">
                Design and create by{' '}
                <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/AlvaroMartinCrespo">
                  Álvaro Martín Crespo
                </a>
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <p className="mr-2">Technologies</p>
              <img src="logos/react.png" alt="React Logo" className="h-12 w-12 mr-4" />
              <img src="logos/tailwind.png" alt="Tailwind Logo" className="h-12 w-12" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
