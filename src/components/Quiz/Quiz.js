import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Home from '../Home/Home';
 import QuizCard from '../QuizCard/QuizCard';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:ml-16 lg:mr-16 lg:mt-16 '>
          {
            quiz.data.map(course => <QuizCard 
             course={course} key={course.id}
            ></QuizCard>,(<Home></Home>))
          }
        </div>
    );
};

export default Quiz;