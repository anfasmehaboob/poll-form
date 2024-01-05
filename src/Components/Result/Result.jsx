import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RevealText from "./RevealText";
import { submitAnswersMockApi } from "../../Service/SumbitForm";

function Result() {
  const questions = useSelector((state) => state.form.questions);
  const answers = useSelector((state) => state.form.answers);

  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [isrendered, setisRendered] = useState(false);

  const renderQuestions = questions?.map((i, index) => {
    return (
      <p
        key={index}
        className=" text-[40px] block   mb-1 md:mb-0 pr-4 font-semibold"
      >
        {i.title}
      </p>
    );
  });
  const renderAnswer = answers?.map((i, index) => {
    return <RevealText key={index} text={i} />;
  });

  let data = {
    question1: answers[0],
    question2: answers[1],
    question3: answers[2],
  };

  const handleSubmitApi = () => {
    submitAnswersMockApi(data)
      .then((res) => {
        if (res.status === 201) {
          setIsSuccessful(true);
          setIsDisable(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isSuccessful) {
      setTimeout(() => {
        setIsSuccessful(false);
      }, 2100);
    }
  }, [isSuccessful]);

  useEffect(() => {
    setTimeout(() => {
      setisRendered(true);
    }, 100);
  }, []);

  return (
    <div
      id="result"
      data-testid="ResultForm"
      className={isrendered ? "sliderAnimation" : "nonvisible"}
    >
      <div className=" flex bg-gray-300">
        <div className=" w-[50%] bg h-screen text-left ps-10">
          {renderQuestions}
        </div>
        <div className="w-[50%]">
          {renderAnswer}

          <div className=" text-left">
            <button
              disabled={isDisable}
              className="bg-blue-500  mt-10  hover:bg-blue-700 text-white font-bold py-4 px-7 rounded"
              onClick={handleSubmitApi}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {isSuccessful && (
        <div className=" bg-white text-[40px] text-lime-600 absolute top-[20%] left-[40%]">
          <p>Completed</p>
          <img src="https://i.gifer.com/7efs.gif" alt="" />
        </div>
      )}
    </div>
  );
}

export default Result;
