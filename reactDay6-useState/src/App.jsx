import { useState } from "react";

const app = () => {
  // const [num, setNum] = useState(10);
  const [num, setNum] = useState({ name: "Harsh", age: 20 });

  const changeVal = () => {
    // setNum() function runs Asynchronously
    // console.log(num)
    // setNum(num+5);
    // console.log(num);
    const newNum = { ...num };
    newNum.name = "Rocky";
    newNum.age = 30;
    setNum(newNum);
  };

  return (
    <>
      <div className="text-white flex items-center justify-center flex-col ">
        App
        <h1 className="font-bold text-9xl text-center text-white m-20">
          {num.name} and {num.age}
        </h1>
        <button
          className="font-bold text-3xl bg-amber-50 text-black p-4 rounded-md"
          onClick={changeVal}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default app;
