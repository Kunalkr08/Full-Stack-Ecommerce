import React from 'react'
import image from '../assest/cancel.gif'
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2'>
       <img src={image}
         width={150}
         height={150} 
         className='mix-blend-multiply'
       />
       <p className='text-red-600 font-bold text-xl'>Payment Cancel</p>
       <Link to={"/Cart"} className='p-2 px-3 mt-3 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white'>Go to Cart</Link>
    </div>
  )
}

export default Cancel