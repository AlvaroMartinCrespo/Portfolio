export default function Modal({ showModal, closeModal }) {
  return (
    <>
      {showModal ? (
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeModal}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-xl font-bold leading-6 text-gray-900" id="modal-headline">
                      Competencies
                    </h3>
                    <div className="mt-2 flex flex-col justify-start">
                      <ul className="list-disc list-inside flex justify-start flex-col items-start">
                        <li>
                          Knowledge of creating websites that are responsive across all screens using HTML5 and CSS3, as
                          well as developing web applications with JavaScript and PHP.
                        </li>
                        <li>Solid understanding of JavaScript and PHP</li>
                        <li>Basic knowledge of MySQL databases.</li>
                        <li>Knowledge of the Laravel PHP framework.</li>
                        <li>Basic understanding of Java.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
