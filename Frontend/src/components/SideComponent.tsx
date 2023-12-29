// import { useState } from "react";

import { useState } from "react";

const SideComponent = () => {
  const [projects, setProjects] = useState([
    "Free Lance Project",
    "SBI Outsource",
  ]);

  return (
    <div>
      <div className="w-60 h-[1024px] bg-white shadow ">
        <div className="w-60 h-[60px] px-6 py-4 border-b border-violet-100 justify-start items-center gap-2.5 inline-flex mb-3">
          <div className="w-5 h-5 relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.0049 14.6196H8.40343V17.6993H2.0049V14.6196ZM11.6015 14.6196H17.9959V17.6993H11.6015V14.6196ZM2 8.46015H17.9976V11.5399H2V8.46015ZM2.0049 2.30072H11.6031V5.38044H2.0049V2.30072ZM14.8011 2.30072H18V5.38044H14.8011V2.30072Z"
                fill="#263FA0"
              />
            </svg>
          </div>
          <div className="text-neutral-800 text-lg font-bold font-['Nunito Sans'] leading-7">
            Task boards
          </div>
        </div>

        {projects.map((project) => (
          <div
            key={project}
            className="w-[220px] h-11 px-8 mx-2 my-1 py-2 bg-violet-100 rounded-lg justify-start items-center gap-2.5 inline-flex"
          >
            <div className="text-neutral-800 text-base font-normal font-['Nunito Sans'] leading-normal">
              {project}
            </div>
          </div>
        ))}

        <hr className="mt-3" />
        <div className="text-blue-600 text-xs my-4 mx-12 font-normal font-['Nunito Sans'] leading-tight">
          + Add new Project
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
