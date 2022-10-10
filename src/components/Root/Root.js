
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'


const Root = () => {

  return (
   
    <div  className="bg-gray-100">
        <Header />
        <Home></Home>
        <Outlet />
    </div>
  )
}

export default Root
