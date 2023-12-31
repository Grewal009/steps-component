import Percentage from "./Percentage";
import { useState } from "react";

const Bill = () => {
  const [bill, setBill] = useState("");
  const [userPercentage, setUserPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const userTip = ((bill / 2) * userPercentage) / 100;
  console.log(userTip);

  const friendTip = ((bill / 2) * friendPercentage) / 100;
  console.log(friendTip);

  const totalTip = userTip + friendTip;
  const totalAmount = bill + userTip + friendTip;

  function handleBill(e) {
    setBill(Number(e.target.value));
  }
  console.log("bill-> ", bill);

  function handleUserPercent(e) {
    setUserPercentage(Number(e.target.value));
  }

  function handleFriendPercent(e) {
    setFriendPercentage(Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setUserPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div className="m-2 p-2 bg-slate-200">
      <label>
        How much was the bill?{" "}
        <input
          type="text"
          placeholder="Enter bill amount"
          value={bill}
          onChange={(e) => handleBill(e)}
          className="bg-slate-100"
        />
      </label>
      <Percentage value={userPercentage} handlePercent={handleUserPercent}>
        <label>How did you like the food? </label>
      </Percentage>
      <Percentage value={friendPercentage} handlePercent={handleFriendPercent}>
        <label>How did your friend like the service? </label>
      </Percentage>

      {bill > 0 && (
        <>
          <p>
            You pay ${totalAmount} (${bill} + ${totalTip} tip)
          </p>
          <button
            onClick={handleReset}
            className="bg-slate-500 px-2 my-1 rounded-lg hover:bg-slate-400 text-slate-300 hover:text-slate-800"
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default Bill;
