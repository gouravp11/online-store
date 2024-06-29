import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({title, image, price, id}) => {
  const trimmer = (str, len) =>{
    if (str.length > 40) {
      return str.substring(0, len) + '...';
    }
    return str;
  }
  return (
    <Link to={`/details/${id}`}>
    <div className='hover:scale-105 hover:text-blue-500  w-60 h-64 p-3 shadow-lg shadow-zinc-300 flex flex-col items-center'>
      <div className="w-36 h-36">
        <img className='w-full h-full object-contain' src={image} alt="" />
      </div>
        <h1 className='text-sm font-semibold my-3 leading-[1vw]]'>{trimmer(title,40)}</h1>
        <h2 className='font-bold text-right self-baseline opacity-70'>${price}</h2>
    </div>
    </Link>
  )
}

export default Product
