
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom'



const Root = () => {

  return (
   
    <div  className="bg-gray-100">
        <Header />
      
        <Outlet />
    </div>
  )
}

export default Root
