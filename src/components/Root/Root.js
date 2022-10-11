
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom'
import Fixheader from '../FixHeader/Fixheader'



const Root = () => {

  return (
   
    <div  className="bg-gray-100">
        <Header />
      <Fixheader></Fixheader>
        <Outlet />
    </div>
  )
}

export default Root
