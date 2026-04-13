import React from "react";
import { useParams } from "react-router-dom";

function ShoesBrand() {

  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <h1 className="text-white font-bold text-6xl mt-80 ml-80 ">{params.id} This is Real Brand of Shoes.</h1>
    </div>
  );
}

export default ShoesBrand;



//Visual Flow Diagram

// App
// ├── Navbar
// ├── Routes
// │   ├── Home
// │   ├── About
// │   ├── Contact
// │   ├── Men
// │   │   └── Outlet
// │   │       ├── Shoes
// │   │       └── ShoesBrand
// │   └── NotFound
// └── Footer