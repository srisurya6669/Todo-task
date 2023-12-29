import { SyntheticEvent, useState } from "react";
import CreateTask from "./CreateTask";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import AddTaskForm from "./AddTaskForm";

const MainComponent = () => {
  const [toDo, setToDo] = useState([
    { name: "Todo", startDate: "1/12/23", deadline: "6/12/23" },
  ]);
  const [progress, setProgress] = useState([]);
  const [review, setReview] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="w-[1200px] h-[1024px] relative">
        <div className="left-[24px] top-[84px] absolute flex-col justify-start items-start gap-5 inline-flex ">
          <div className="flex-col justify-start items-start gap-[19px] flex">
            <div className="h-8 px-3 py-1 bg-violet-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 flex">
                <div className="w-2 h-2 relative"></div>
                <div className="text-blue-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  <div className="flex">
                    <div className="h-2 w-2 rounded-[50px] mt-1 mr-1 bg-violet-500"></div>
                    <div className="">To Do</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {toDo.map((todo) => (
            <CreateTask key={todo.name} task={todo} />
          ))}
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[270px] h-8 px-2 py-2.5 bg-violet-100 rounded-lg justify-center items-center gap-1 inline-flex">
              <div className="w-3 h-3 relative"></div>
              <div className="px-2 justify-center items-center gap-2.5 flex">
                <div className="text-blue-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  + Add new
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-[318px] top-[84px] absolute flex-col justify-start items-start gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-[19px] flex">
            <div className="h-8 px-3 py-1 bg-pink-50 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 flex">
                <div className="w-2 h-2 relative"></div>
                <div className="text-pink-500 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  <div className="flex">
                    <div className="h-2 w-2 rounded-[50px] mt-1 mr-1 bg-pink-500"></div>
                    <div className="">In Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {progress.map((todo) => (
            <CreateTask task={todo} />
          ))}
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[270px] h-8 px-2 py-2.5 bg-pink-50 rounded-lg justify-center items-center gap-1 inline-flex">
              <div className="w-3 h-3 relative"></div>
              <div className="px-2 justify-center items-center gap-2.5 flex">
                <div className="text-pink-500 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  + Add new
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-[612px] top-[84px] absolute flex-col justify-start items-start gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-[19px] flex">
            <div className="h-8 px-3 py-1 bg-blue-50 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 flex">
                <div className="w-2 h-2 relative"></div>
                <div className="text-sky-400 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  <div className="flex">
                    <div className="h-2 w-2 rounded-[50px] mt-1 mr-1 bg-blue-500"></div>
                    <div className="">In Review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {review.map((todo) => (
            <CreateTask task={todo} />
          ))}
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[270px] h-8 px-2 py-2.5 bg-sky-50 rounded-lg justify-center items-center gap-1 inline-flex">
              <div className="w-3 h-3 relative"></div>
              <div className="px-2 justify-center items-center gap-2.5 flex">
                <div className="text-sky-400 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  + Add new
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-[906px] top-[84px] absolute flex-col justify-start items-start gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-[19px] flex">
            <div className="h-8 px-3 py-1 bg-green-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 flex">
                <div className="w-2 h-2 relative"></div>
                <div className="text-green-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                  <div className="flex">
                    <div className="h-2 w-2 rounded-[50px] mt-1 mr-1 bg-green-500"></div>
                    <div className="">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {completed.map((todo) => (
            <CreateTask task={todo} />
          ))}
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[270px] h-8 px-2 py-2.5 bg-green-100 rounded-lg justify-center items-center gap-1 inline-flex">
              <div className="w-3 h-3 relative"></div>
              <Popup
                modal
                trigger={
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-2 justify-center items-center gap-2.5 flex btn"
                  >
                    <div className="text-green-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                      + Add new
                    </div>
                  </button>
                }
              >
                <AddTaskForm />
              </Popup>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[1200px] px-6 py-4 left-0 top-0 absolute border-b border-violet-100 justify-start items-center gap-2.5 inline-flex">
            <div className="text-neutral-800 text-lg font-semibold font-['Nunito Sans'] leading-7">
              My Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
