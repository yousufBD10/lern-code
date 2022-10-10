import { createBrowserRouter } from 'react-router-dom'

import Root from '../components/Root/Root'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
 
  
    // children: [
    //   { path: '/', element: <Home /> },
    //   { path: '/home', element: <Home /> },
    //   { path: '/shop', element: <Shop /> },
    //   { path: '/cart', element: <Cart /> },
    //   { path: '/about', element: <About /> },
    // ],
  },
])

export default router
