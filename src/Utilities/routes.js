import { createBrowserRouter } from 'react-router-dom'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog'
import Home from '../components/Home/Home'
import Quiz from '../components/Quiz/Quiz'

import Root from '../components/Root/Root'
import Statistics from '../components/Statistics/Statistics'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
 
  
    children: [
    { path: '/home',
     element: <Home></Home>},
    { path: '/quiz',
     element: <Quiz></Quiz>},
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
