// import { useState } from "react";

import Popup from "reactjs-popup";

const SideComponent = () => {
  const projects = ["Free Lance Project", "SBI Outsource"];
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

        <Popup
          modal
          trigger={
            <button className="text-blue-600 text-xs my-4 mx-12 font-normal font-['Nunito Sans'] leading-tight">
              <div className="text-pink-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                + Add new Project
              </div>
            </button>
          }
        >
          <form>
            <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
              <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
                Name of the Project
              </div>
              <input
                id="1"
                type="text"
                className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex"
                placeholder="Project Name"
                name="taskName"
              />
            </div>
            <div className="flex-col items-end">
              <button
                type="submit"
                value="submit"
                className="px-4 py-1 border mr-5 float-end bg-blue-500 hover:bg-blue-400 rounded-lg text-white"
              >
                Add
              </button>
              <button className="ml-5 float-end mr-5 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded text-blue-700">
                Cancel
              </button>
            </div>
          </form>
        </Popup>
      </div>
    </div>
  );
};

export default SideComponent;
