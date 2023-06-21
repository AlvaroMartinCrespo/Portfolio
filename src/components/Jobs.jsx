import { Tabs } from '@rewind-ui/core';
export default function Jobs() {
  return (
    <section id="jobs" className="container mx-auto my-24">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Jobs
      </h2>
      <div className="text-white flex justify-center mt-10">
        <Tabs
          className="flex justify-center flex-col items-center"
          defaultTab="tab-1"
          color="gray"
          radius="lg"
          tone="pill"
        >
          <Tabs.List>
            <Tabs.Tab anchor="tab-1">DSS NetWork</Tabs.Tab>
            <Tabs.Tab anchor="tab-2">Personal projects</Tabs.Tab>
          </Tabs.List>

          <Tabs.Content anchor="tab-1">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-2xl font-bold">DSS Network</h2>
              <span className="mt-2 text-xs italic font-bold">"HTML, CSS, JavaScript"</span>
              <div className="grid grid-cols-1 md:grid-cols-2 my-10 items-center">
                <p className="text-center p-5">
                  My first job involved dedicating time to web design using HTML and CSS (Bootstrap). I utilized
                  JavaScript (jQuery) for some animations and page functions, including libraries, as well as working
                  with PHP.
                </p>
                <img className="p-10" src="img/dssnetwork.png" alt="dssnetwork" />
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content anchor="tab-2">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-2xl font-bold">Personal Projects</h2>
              <span className="mt-2 text-xs italic font-bold">"ReactJS, NextJS, MongoDB, ..."</span>
              <p className="my-5 px-16 md:px-40 text-center mt-10">
                I am a technology enthusiast who is always eager to learn new technologies. I have completed several
                projects in ReactJS and I am currently learning NextJS to have a full-stack profile. I am passionate
                about front-end development with JavaScript and its various frameworks.
              </p>
              <a
                target="_blank"
                className="text-amber-400 font-bold py-2 px-4 rounded-lg shadow-md bg-slate-800 hover:bg-slate-600"
                href="https://github.com/AlvaroMartinCrespo"
              >
                Visit GitHub
              </a>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </section>
  );
}
