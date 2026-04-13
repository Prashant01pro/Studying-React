import React from "react";
import Navbar2 from "./Navbar2";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

function Navbar1(props) {
  console.log(props);

  const data = useContext(ThemeDataContext);
  console.log(data);

  return (
    <div className="nav">
      {/* <h2>X-CodeForces</h2> */}
      <h2>{data}</h2>
      {/* {props.children[0]}      // Passing Data in Children */}
      <Navbar2 theme={props.theme} />
    </div>
  );
}

export default Navbar1;
