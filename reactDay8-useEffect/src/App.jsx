import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [val, setVal] = useState(0);

  function valueChangeA() {
    console.log("A ki value change ho gai");
  }

  function valueChangeB() {
    console.log("B ki value change ho gai");
  }

  // 1st Use:  This is not proper use of useEffect. Every time state changes useEffect runs , can be done by normal function
  // useEffect(() => {
  // console.log('useEffect is running ...')
  // })

  // 2nd use: Runs only once , Even if states changes
  // after adding value in [] , value become dependency So when value changes only when useEffect running , not run when change in val

  useEffect(() => {
    valueChangeA();   // check for valueChangeB()
    console.log('useEffect is running ...')
    // },[value])
  }, [value]); // now useEffect runs on both Changes

  function clickButtonA() {
    console.log("Botton A is Clicked ");
  }

  function clickButtonB() {
    console.log("Botton B is Clicked ");
  }

  function increaseValue() {
    setValue(value + 1);
    clickButtonA();
  }

  function decreaseVal() {
    setVal(val - 1);
    clickButtonB();
  }

  return (
    <div className="text-white flex items-center  flex-col gap-4 ">
      <div className="flex">
        <h1 className="font-bold text-9xl text-center text-white m-10">
          {value}
        </h1>
        <h1 className="font-bold text-9xl text-center text-white m-10">
          {val}
        </h1>
      </div>
      <div>
        <button
          onClick={() => increaseValue()}
          className="font-bold text-3xl mr-8 bg-amber-50 text-black p-4 rounded-md"
        >
          Button A
        </button>
        <button
          onClick={() => decreaseVal()}
          className="font-bold text-3xl bg-amber-50 text-black p-4 rounded-md"
        >
          Button B
        </button>
      </div>
    </div>
  );
}

export default App;
