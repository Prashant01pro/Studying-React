import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  // const btnClicked=()=>{
  //   navigate('/')
  // }

  return (
    <div>
      <h1 className="text-white font-bold text-6xl mt-80 ml-80">
        Contact Page
      </h1>
      <button onClick={()=>navigate('/')} className="text-white font-semibold bg-blue-600 ml-90 mt-4 p-4 rounded-md active:scale-95">
        Return to Home
      </button>
       <button onClick={()=>navigate(-1)} className="text-white font-semibold bg-blue-600 ml-90 mt-4 p-4 rounded-md active:scale-95">
        Previous
      </button>
    </div>
  );
};

export default Contact;
