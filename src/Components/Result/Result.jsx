import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RevealText from "./RevealText";

function Result() {
  const questions = useSelector((state) => state.form.questions);
  const answers = useSelector((state) => state.form.answers);

  const rederQuestions = questions?.map((i, index) => {
    return <p className=" text-[40px] font-semibold">{i.title}</p>;
  });
  const rederAnswer = answers?.map((i, index) => {
    return <RevealText text={i} />;
  });

  return (
    <div>
      <div className=" flex">
        <div className=" w-[50%] h-screen bg-green-500">{rederQuestions}</div>
        <div className="w-[50%]">{rederAnswer}</div>
      </div>
    </div>
  );
}

export default Result;
