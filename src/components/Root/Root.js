// import React, { createContext, useState } from 'react'
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom'

// export const ProductContext = createContext([])
// export const CartContext = createContext([])
const Root = () => {
  // const { products, initialCart } = useLoaderData()

  // const [cart, setCart] = useState(initialCart)
  return (
    // <ProductContext.Provider value={products}>
    //   <CartContext.Provider value={[cart, setCart]}>
      
       
    //   </CartContext.Provider>
    // </ProductContext.Provider>
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Root
