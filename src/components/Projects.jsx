import { Tabs } from 'flowbite';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    function handleTabs() {
      const tabElements = [
        {
          id: 'profile',
          triggerEl: document.querySelector('#profile-tab-example'),
          targetEl: document.querySelector('#profile-example'),
        },
        {
          id: 'dashboard',
          triggerEl: document.querySelector('#dashboard-tab-example'),
          targetEl: document.querySelector('#dashboard-example'),
        },
        {
          id: 'settings',
          triggerEl: document.querySelector('#settings-tab-example'),
          targetEl: document.querySelector('#settings-example'),
        },
        {
          id: 'contacts',
          triggerEl: document.querySelector('#contacts-tab-example'),
          targetEl: document.querySelector('#contacts-example'),
        },
      ];

      // options with default values
      const options = {
        defaultTabId: 'profile-tab-example',
        activeClasses:
          'text-violet-500 hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300 border-violet-500 dark:border-violet-400',
        inactiveClasses:
          'text-gray-400 hover:text-gray-500 dark:text-gray-300 border-gray-100 hover:border-gray-200 dark:border-gray-600 dark:hover:text-gray-200',
      };

      const tabs = new Tabs(tabElements, options);
    }

    window.addEventListener('load', handleTabs);

    return () => {};
  }, []);

  return (
    <div className="my-11 flex justify-center items-center flex-col">
      <div className="mb-10">
        <ul className=" text-xl flex gap-10 dark:text-gray-400" id="tabExample" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="profile-tab-example"
              type="button"
              role="tab"
              aria-controls="profile-example"
              aria-selected="false"
            >
              Piano
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab-example"
              type="button"
              role="tab"
              aria-controls="dashboard-example"
              aria-selected="false"
            >
              FactsCats
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="settings-tab-example"
              type="button"
              role="tab"
              aria-controls="settings-example"
              aria-selected="false"
            >
              MovieFinder
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="contacts-tab-example"
              type="button"
              role="tab"
              aria-controls="contacts-example"
              aria-selected="false"
            >
              Proyecto4
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample" className=" flex justify-center items-center">
        <div
          className="  hidden w-2/3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile-example"
          role="tabpanel"
          aria-labelledby="profile-tab-example"
        >
          <section className="text-sm text-gray-300 flex justify-center items-center gap-4">
            <div className="w-1/3">
              <img src="img/piano.png" alt="piano-img" />
            </div>
            <div className=" flex w-2/3 justify-center items-center flex-col gap-9">
              <p>
                This application is a small piano script that allows you to play 5 different notes. It was developed
                using React and Tailwind technologies, ensuring optimal performance and an intuitive user interface.
              </p>
              <a
                href="https://github.com/AlvaroMartinCrespo/ReactProjects/tree/master/Piano"
                target="_blank"
                className=" transition-all duration-300 hover:text-xl hover:text-violet-500  "
              >
                Visit on GitHub
              </a>
            </div>
          </section>
        </div>
        <div
          className="hidden w-2/3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="dashboard-example"
          role="tabpanel"
          aria-labelledby="dashboard-tab-example"
        >
          <section className="text-sm text-gray-300 flex justify-center items-center gap-4 ">
            <div className="w-1/3">
              <img src="img/cat.png" alt="cat-img" />
            </div>
            <div className=" flex w-2/3 justify-center items-center flex-col gap-9">
              <p>
                This application performs 2 fetch requests to different APIs. The first API retrieves a random fact
                about cats, while the second API retrieves an image of a cat containing the first word of the fact. The
                retrieved information is then displayed on the screen.
              </p>
              <a
                href="https://github.com/AlvaroMartinCrespo/ReactProjects/tree/master/FactsCatSearch"
                target="_blank"
                className=" transition-all duration-300 hover:text-xl hover:text-violet-500  "
              >
                Visit on GitHub
              </a>
            </div>
          </section>
        </div>
        <div
          className="hidden w-2/3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="settings-example"
          role="tabpanel"
          aria-labelledby="settings-tab-example"
        >
          <section className="text-sm text-gray-300 flex justify-center items-center gap-4">
            <div className="w-1/3">
              <img src="img/movie.png" alt="movie-img" />
            </div>
            <div className=" flex w-2/3 justify-center items-center flex-col gap-9">
              <p>
                This application makes a fetch request to an API in order to search for a movie. The retrieved
                information is then displayed on the screen.
              </p>
              <a
                href="https://github.com/AlvaroMartinCrespo/ReactProjects/tree/master/BuscadorPeliculas"
                target="_blank"
                className=" transition-all duration-300 hover:text-xl hover:text-violet-500  "
              >
                Visit on GitHub
              </a>
            </div>
          </section>
        </div>
        <div
          className="hidden w-2/3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="contacts-example"
          role="tabpanel"
          aria-labelledby="contacts-tab-example"
        >
          <section className="text-sm text-gray-300 flex justify-center items-center ">
            <div className="w-1/3">
              <img src="img/icon-react.png" alt="" />
            </div>
            <div className=" flex w-2/3 justify-center items-center flex-col gap-9">
              <p>Working ...</p>
              <a
                href="https://media.istockphoto.com/id/169937776/es/foto/hombre-de-negocios-en-ropa-chimpanc%C3%A9.jpg?s=612x612&w=0&k=20&c=PluUMp8BS28vl9xJE0zZ3hm-7xnuiPEPpRYxPk6HOcQ="
                target="_blank"
                className=" transition-all duration-300 hover:text-xl hover:text-violet-500  "
              >
                Visit on GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
