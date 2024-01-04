import React from "react";
import "./Form.css";
import Slide from "../Slide/Slide";
import { useSelector } from "react-redux";
import Result from "../Result/Result";
function Form({ questions }) {
  const answers = useSelector((state) => state.form.answers);

  const summary = useSelector((state) => state.form.summary);

  const renderPolls = questions.map((i, index) => {
    return (
      <div
        key={index}
        className=" w-4 h-4 rounded-lg bg-white mb-1 flex justify-center items-center"
      >
        {answers.length === index && (
          <div className=" w-2 h-2 bg-slate-800 rounded"></div>
        )}
      </div>
    );
  });
  return (
    <div className=" h-screen overflow-hidden customeHeight relative">
      {!summary && (
        <div className=" fixed top-[48%] left-[100px]">{renderPolls}</div>
      )}

      {!summary ? (
        questions.map((i, index) => {
          return (
            <Slide
              id={index}
              key={index}
              title={i?.title}
              options={i?.options}
            />
          );
        })
      ) : (
        <Result />
      )}
    </div>
  );
}

export default Form;
