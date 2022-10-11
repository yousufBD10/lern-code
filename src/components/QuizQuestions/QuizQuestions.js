
import { useLoaderData } from 'react-router-dom';
import QuizAnswer from '../QuizAnswer/QuizAnswer';


const QuizQuestions = () => {

  
    const quiz = useLoaderData();
    // console.log(quiz.data.questions);
    return (
        <div className=' text-center'>
          <h1 className='text-4xl font-bold mt-16 py-8  bg-slate-50'> Quiz of : {quiz.data.name}</h1>
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