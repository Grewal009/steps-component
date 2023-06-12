const App = () => {
  return (
    <div>
      <div className="w-[300px] m-auto flex flex-col items-center bg-red-100">
        {/**Steps */}
        <div className=" px-2 py-5 w-[300px] flex justify-between bg-green-100">
          <div className="w-10 h-10 bg-slate-200 flex justify-center items-center rounded-full">
            1
          </div>
          <div className="w-10 h-10 bg-slate-200 flex justify-center items-center rounded-full">
            2
          </div>
          <div className="w-10 h-10 bg-slate-200 flex justify-center items-center rounded-full">
            3
          </div>
        </div>

        {/**Message */}
        <p className="mx-2 my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default App;
