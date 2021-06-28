import React from "react";
import c2 from "../images/c2.PNG";
import Cona from "./Cona"
const context = () => {
  return (
      <div>
    <div className=" grid grid-cols-3 gap-2 pt-4">
      <img className="pr-2  h-11/12 w-11/12" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12 rounded-md" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12 rounded-md" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12" src={c2} alt="" />
      {/* <img className="pr-2 mr-6 h-11/12 w-11/12" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12" src={c2} alt="" />
      <img className="pr-2 mr-6 h-11/12 w-11/12" src={c2} alt="" /> */}
    </div>
    <Cona />
    </div>
    
  );
};

export default context;
