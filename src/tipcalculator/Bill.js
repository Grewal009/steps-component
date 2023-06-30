import Percentage from "./Percentage";
import { useState } from "react";

const Bill = () => {
  const [bill, setBill] = useState(0);
  const [userPercentage, setUserPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handleBill(e) {
    setBill(e.target.value);
  }
  console.log("bill-> ", bill);

  function handleUserPercent(e) {
    setUserPercentage(e.target.value);
  }

  function handleFriendPercent(e) {
    setFriendPercentage(e.target.value);
  }

  return (
    <div className="m-2 p-2 bg-slate-200">
      <label>
        How much was the bill?{" "}
        <input
          type="text"
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
    </div>
  );
};

export default Bill;
