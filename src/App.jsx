import React, { useContext, useEffect } from 'react'
import { CartContext } from './components/web/context/Cart.jsx';
import { router } from './layouts/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { UserContext } from './components/web/context/User.jsx';

export default function App() {
let {setUserToken} = useContext(UserContext);
let{count,setCount,getCartContext} =useContext(CartContext);
useEffect( ()=> {
 if(localStorage.getItem("userToken") !=null){
  setUserToken(localStorage.getItem("userToken"));
  setCount(getCartContext().count);
 }
},[]) 

  return (
    
  
   <RouterProvider router={router} />
  
   
    
   
   
  )
}



