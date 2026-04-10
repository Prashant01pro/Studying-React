import { useState } from "react";

const app = () => {
  const [inputVal, setInputVal] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by ", inputVal);
    setInputVal("");
  };

  return (
    <>
      <div className="text-white flex items-center justify-center flex-col ">
        {/* <form action="" onClick={(e)=>{   this fires on button as well as anywhere on input*/}
        {/* Correct event handler to form submission is onSubmit */}
        <form
          action=""
          // onSubmit={(e) => {             // This also works but no Reusability, Hard Debugging, Performance (Small but Important):New function created on every render ❌
          //   e.preventDefault();
          //   submitHandler(e);
          // }}
          // You can use e.preventDefault() directly inside the form, but we use a separate function because it keeps code clean, reusable, maintainable, and scalable — which is required in real-world React apps.
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            className="border-4 border-purple-500 focus:border-pink-600 rounded-md m-6 p-6 text-2xl outline-none "
            type="text"
            value={inputVal} // Imp
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            placeholder="Enter Your Name"
          />
          <button className="font-bold text-3xl bg-amber-50 text-black p-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default app;

// ⚠️ Important experiment

// Try this:
// <input value="Hello" />

// 👉 You CANNOT type anything

// Why?
// 👉 Because React keeps forcing "Hello"

// ✅ Final clarity
// Why do we need value={inputVal}?
// Because:
// 👉 It binds the input display to React state

// And ensures:
// React is the single source of truth
// Input can’t go out of sync
