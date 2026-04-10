import { useState } from "react";
import PlayingWithNumber from "./PlayingWithNumber";

const app = () => {
  // const [val, setVal] = useState(0)
  //const [val, setVal] = useState(5)
  //const [val, setVal] = useState("Harsh")
  const [val, setVal] = useState("Aman");
  const [customer, setCustomer] = useState("Harsh")

  function changtVal() {
    setVal(20);
    setCustomer("Shudhanshu")
  }

  return (
    <>
      <div className="text-amber-50 flex items-center justify-center size-full flex-col">
        <h1 className="font-bold text-5xl m-4">The Value of X : {val}<br />Customer Name:{customer}</h1>
        <button
          className="bg-amber-50 text-black text-3xl p-2 rounded-lg m-6"
          onClick={changtVal}
        >
          Click
        </button>
         <PlayingWithNumber/>
      </div>
     
    </>
  );
};

export default app;
