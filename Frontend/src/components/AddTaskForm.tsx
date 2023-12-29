const AddTaskForm = () => {
  return (
    <form>
      <div className="w-[670px] h-[388px] rounded-[10px] flex-col justify-start items-centre  inline-flex">
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
              <input
                type="date"
                className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex"
                placeholder=" DD/MM/YYYY"
                name="startDate"
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
                Deadline
              </div>
              <input
                type="date"
                className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex"
                placeholder=" DD/MM/YYYY"
                name="deadline"
              />
            </div>
          </div>
          <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
            <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
              Status
            </div>
            <select required className="self-stretch border p-2 rounded-md">
              <option> To Do</option>
              <option> In Review</option>
              <option> In Progress</option>
              <option> Completed</option>
            </select>
          </div>
        </div>
        <hr className="mb-2" />
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
      </div>
    </form>
  );
};

export default AddTaskForm;
