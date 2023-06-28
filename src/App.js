import { useState } from "react";
import { message } from "./constants";
import Button from "./Button";
import Message from "./Message";

const App = () => {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  const styleButton =
    "w-30 px-2 py-2 text-white font-medium bg-purple-500 hover:bg-purple-700 rounded-lg";
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

        <Message step={step}>{message[step - 1]}</Message>

        {/**Buttons */}
        <div className="px-2 my-5 w-[300px] flex justify-between ">
          <Button styleBtn={styleButton} handleClick={handlePrevious}>
            <span>👈</span>&nbsp;Previous
          </Button>
          <Button styleBtn={styleButton} handleClick={handleNext}>
            Next&nbsp;<span>👉</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
