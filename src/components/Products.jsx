import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { userContext } from '../utils/context';
import Loading from './Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import instance from '../utils/axios';

const Products = () => {
  const [products]= useContext(userContext);
  const {search}= useLocation()
  const navigate= useNavigate()
  const category= decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setFilteredProduct] = useState([]);
  useEffect(()=>{
    if(category=="undefined") setFilteredProduct(products);
    else setFilteredProduct(products.filter(product => product.category === category))
  },[category,products])
  return (
    <div className='p-5 w-[85%] max-h-screen h-screen flex flex-wrap justify-center gap-10 overflow-x-hidden overflow-y-auto relative'>
      {filteredProducts.length>0? filteredProducts.map(product => <Product key={product.id} title={product.title} image={product.image} price={product.price} id={product.id}/>): <Loading/>}
      {category!="undefined" && filteredProducts.length>0? <button className='absolute left-5 p-2 px-3 rounded bg-blue-500 text-white font-bold text-xs' onClick={()=>navigate(-1)}>Go back</button>:""}
    </div>
  )
}

export default Products
