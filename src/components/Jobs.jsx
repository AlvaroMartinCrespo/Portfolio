import { Tabs } from '@rewind-ui/core';
export default function Jobs() {
  return (
    <section id="jobs" className="container mx-auto my-10">
      <h2 className="text-5xl text-center font-bold bg-gradient-to-r from-gray-100 to-gray-700 text-transparent bg-clip-text underline-offset-8 underline decoration-2 decoration-amber-400">
        Jobs
      </h2>
      <div className="text-white flex justify-center mt-10">
        <Tabs defaultTab="tab-1" color="gray" radius="lg" tone="pill">
          <Tabs.List>
            <Tabs.Tab anchor="tab-1">DSS NetWork</Tabs.Tab>
            <Tabs.Tab anchor="tab-2">Personal projects</Tabs.Tab>
          </Tabs.List>

          <Tabs.Content anchor="tab-1">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-2xl font-bold">DSS NetWork</h2>
              <p>Info about job</p>
            </div>
          </Tabs.Content>
          <Tabs.Content anchor="tab-2">
            <div className="flex justify-center flex-col items-center">
              <h2 className="text-2xl font-bold">Personal Projects</h2>
              <p>Info about my personal projects</p>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </section>
  );
}
