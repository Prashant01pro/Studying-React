import React, { useState } from "react";

const PlayingWithNumber = () => {
  const [val, setval] = useState(0);

  function increaseVal(){
    setval(val+1)
  }

  function decreaseVal(){
    setval(val-1)
  }

  function increasevalBy10(){
    setval(val+10)
  }

  return (
    <div className="text-white m-4 flex flex-col gap-4">
      <h1 className="font-bold text-9xl text-center m-2">{val}</h1>
      <button className="font-bold text-3xl bg-amber-50 text-black p-4 rounded-md" onClick={increaseVal}>Increment</button>
      <button className="font-bold text-3xl bg-amber-50 text-black p-4 rounded-md" onClick={decreaseVal}>Decrease</button>
      <button className="font-bold text-3xl bg-amber-50 text-black p-4 rounded-md" onClick={increasevalBy10}>Increment by 10</button>
    </div>
  );
};

export default PlayingWithNumber;
