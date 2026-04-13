import React from "react";
import { createContext } from "react";

export const ThemeDataContext = createContext();

function ThemeContext(props) {
  return (
    <div>
      {/* {props.children} */}
      <ThemeDataContext.Provider value='Harshu'>{props.children}</ThemeDataContext.Provider>
    </div>
  );
}

export default ThemeContext;
