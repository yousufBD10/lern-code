
import { useLoaderData } from 'react-router-dom';
import QuizAnswer from '../QuizAnswer/QuizAnswer';


const QuizQuestions = () => {

  
    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    return (
        <div className=' text-center'>
          <h1> Name{quiz.data.name}</h1>
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