interface Props {
  task: {
    name: string;
    startDate: string;
    deadline: string;
  };
}
const CreateTask = ({ task }: Props) => {
  return (
    <>
      <div className="w-[270px] h-[114px] p-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="text-black text-base font-semibold font-['Nunito Sans'] leading-normal">
          {task.name}
        </div>
        <div className="justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-neutral-500 text-xs font-normal font-['Nunito Sans'] leading-tight">
              Start date
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-[81px] px-2 py-1 bg-violet-100 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="justify-center items-center gap-1 flex">
                  <div className="text-blue-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                    {task.startDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-neutral-500 text-xs font-normal font-['Nunito Sans'] leading-tight">
              Deadline
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-[81px] px-2 py-1 bg-violet-100 rounded-lg justify-center items-center gap-2.5 flex">
                <div className="justify-center items-center gap-1 flex">
                  <div className="text-blue-600 text-xs font-normal font-['Nunito Sans'] leading-tight">
                    {task.deadline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
