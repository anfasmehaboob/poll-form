import React from "react";
import Options from "../Options/Options";

function Slide({ title, options, id,color }) {
  return (
    <div id={"slide" + id} data-testid="sliders" className={` flex h-full }`}>
      <div className={` w-2/4 h-full ${color} flex justify-center items-center`}>
        <p className=" text-[60px] text-white font-medium w-[50%]">{title}</p>
      </div>
      <div className=" w-2/4 h-full flex justify-center items-center">
        {options?.map((i, index) => {
          return <Options key={index} label={i.label} icon={i.icon} />;
        })}
      </div>
    </div>
  );
}

export default Slide;
