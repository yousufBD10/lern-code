import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAnswer from '../QuizAnswer/QuizAnswer';

const QuizQuestions = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    return (
        <div>
          {
            quiz.data.questions.map(questions => 
            
          
            <QuizAnswer
            key={questions.id} questions={questions}
            ></QuizAnswer>)
          }
         
        </div>
    );
};

export default QuizQuestions;