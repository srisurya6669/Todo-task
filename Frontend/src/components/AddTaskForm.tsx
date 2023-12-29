import { SyntheticEvent } from "react";

// interface Props {
//   onSubmit: () => void;
// }

const AddTaskForm = () => {
  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  return (
    <form onSubmit={submit}>
      <div className="w-[670px] h-[388px] rounded-[10px] flex-col justify-start items-start inline-flex">
        <div className="w-[670px] h-[52px] px-6 py-2.5 bg-white border-b border-blue-100 justify-between items-center inline-flex">
          <div className="text-blue-800 text-base font-normal font-['Nunito Sans'] leading-normal">
            Add new task
          </div>
          <div className="w-5 h-5 p-1 justify-center items-center flex"></div>
        </div>
        <div className="h-[284px] px-6 py-4 bg-white flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
            <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
              Name of the Task
            </div>
            <input
              type="text"
              className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex"
              placeholder="Text"
              name="taskName"
            />
          </div>
          <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
                Start date
              </div>
              <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-[7px] flex">
                  <div className="justify-start items-center gap-px flex">
                    <div className="text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                      DD/MM/YYYY
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 px-0.5 py-[2.80px] justify-center items-center flex"></div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
                Deadline
              </div>
              <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-[7px] flex">
                  <div className="justify-start items-center gap-px flex">
                    <div className="text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal">
                      DD/MM/YYYY
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 px-0.5 py-[2.80px] justify-center items-center flex"></div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
            <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
              Status
            </div>
            <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-[7px] flex">
                <div className="justify-start items-center gap-px flex">
                  <div className="text-neutral-800 text-base font-normal font-['Nunito Sans'] leading-normal">
                    To Do
                  </div>
                </div>
              </div>
              <div className="w-5 h-5 px-0.5 py-[5.40px] justify-center items-center flex"></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="bg-blue-100 hover:bg-blue-700 font-bold py-1 px-2 rounded text-blue-500">
            Cancel
          </button>
          <button type="submit" value="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
