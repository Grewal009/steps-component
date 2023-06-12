import { useState } from "react";
import { message } from "./constants";

const App = () => {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="w-full h-[300px] flex justify-center items-center">
      <div className="w-[300px] h-auto m-auto flex flex-col items-center border-[1px] bg-slate-50 shadow-md shadow-slate-300 rounded-md">
        {/**Steps */}
        <div className=" px-2 py-5 w-[300px] flex justify-between">
          <div
            className={
              step >= 1
                ? "w-10 h-10 font-medium text-white bg-purple-500 flex justify-center items-center rounded-full"
                : "w-10 h-10 font-medium bg-slate-200 flex justify-center items-center rounded-full"
            }
          >
            1
          </div>
          <div
            className={
              step >= 2
                ? "w-10 h-10 font-medium text-white bg-purple-500 flex justify-center items-center rounded-full"
                : "w-10 h-10 font-medium bg-slate-200 flex justify-center items-center rounded-full"
            }
          >
            2
          </div>
          <div
            className={
              step >= 3
                ? "w-10 h-10 font-medium text-white bg-purple-500 flex justify-center items-center rounded-full"
                : "w-10 h-10 font-medium bg-slate-200 flex justify-center items-center rounded-full"
            }
          >
            3
          </div>
        </div>

        {/**Message */}
        <p className="mx-2 my-5">
          <span className="text-lg font-medium">Step{step}: </span>
          {message[step - 1]}.
        </p>

        {/**Buttons */}
        <div className="px-2 my-5 w-[300px] flex justify-between ">
          <button
            onClick={handlePrevious}
            className="w-24 px-2 py-2 text-white font-medium bg-purple-500 hover:bg-purple-700 rounded-lg"
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="w-24 px-2 py-2 text-white font-medium bg-purple-500 hover:bg-purple-700 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
