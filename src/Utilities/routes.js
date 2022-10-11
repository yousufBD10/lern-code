import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Home from '../components/Home/Home'
import Quiz from '../components/Quiz/Quiz'
import QuizQuestions from '../components/QuizQuestions/QuizQuestions'
import QuizCard from '../components/QuizCard/QuizCard'

import Root from '../components/Root/Root'
import Statistics from '../components/Statistics/Statistics'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
   errorElement: <ErrorPage></ErrorPage>,
  
    children: [
    { path: '/',
     element: <Home></Home>},
    { path: '/home',
     element: <Home></Home>},
   
    { path: '/quiz',
    loader:()=>{
     return fetch("https://openapi.programming-hero.com/api/quiz")
    },
        
     element: <Quiz></Quiz>},
    { path: '/quiz:quizId',
     loader: async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
     },
     element: <QuizQuestions></QuizQuestions>},
    { path: '/statistics',
     element: <Statistics></Statistics>},
    { path: '/blog',
     element: <Blog></Blog>},
    { path: '/about',
     element:<About></About>},
     
    ],
  },
])

export default router
