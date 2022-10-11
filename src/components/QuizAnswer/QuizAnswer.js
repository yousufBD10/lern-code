
import React from "react";

const QuizAnswer = ({ questions }) => {
  const { correctAnswer, question, options } = questions;
  const handleanswer = (props) => {
  
     
      if (correctAnswer === props) {
        alert("correct");
       
      } else {
        alert("wrong");
      }
    

    
  };

  return (
    <div className=" bg-slate-400 m-6  lg:p-16">
      <h5 className="mb-2 text-4xl font-bold mb-16 tracking-tight text-gray-900 dark:text-white">
        {question}
      </h5>
      {options.map((optionquestions) => (
        <div>
          <button   
            onClick={() => handleanswer(optionquestions)}
            className="ml-2 flex items-center hover:bg-sky-500 bg-sky-300 w-1/3 rounded-md  p-8 mb-4 text-3xl text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {" "}
            {optionquestions}
          </button>
        </div>
      ))}

      <h2 className="ml-2 text-3xl font-medium text-gray-900 dark:text-gray-300">
        Correct answer: {correctAnswer}
      </h2>
    </div>
  );
};

export default QuizAnswer;
