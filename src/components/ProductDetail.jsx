import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import instance from "../utils/axios";
import Loading from "./Loading";
import { userContext } from "../utils/context";

const ProductDetail = () => {
  const [products,setProducts] = useContext(userContext);
  const navigate = useNavigate();
  const [product, setProduct]= useState(null)
  const deleteHandeler = () =>{
    const productsAfterDelete = products.filter(product => product.id.toString() != id)
    setProducts(productsAfterDelete)
    localStorage.setItem('products', JSON.stringify(productsAfterDelete))
    navigate(-1); 
  }
  const { id } = useParams("id");
  useEffect(()=>{
    setProduct(products.filter(product => product.id.toString() === id)[0])
  },[])

  return( product?
      <div className="p-[2vw] w-[80%] mx-auto h-screen flex justify-between relative">
        <div className="w-[30%] h-full">
          <img
            className="w-full h-full object-contain"
            src={product.image}
            alt=""
          />
        </div>
        <div className="w-[60%] flex flex-col justify-center">
          <h1 className="text-[2vw] font-bold leading-[2.2vw]">
            {product.title}
          </h1>
          <h6 className="text-xs opacity-60 font-bold mt-3">
            {product.category}
          </h6>
          <h2 className="text-[2vw] font-semibold leading-[2.2vw] my-10">
            Price: $<span>{product.price}</span>
          </h2>
          <button className="p-2 w-fit px-6 font-bold bg-green-600 text-white rounded my-5">
            Buy now
          </button>
          <p>{product.description}</p>
          <div className="flex gap-2 mt-6">
          <Link to={`/edit/${id}`} className="p-2 px-3 rounded bg-blue-500 text-white font-bold text-xs">Edit</Link>
          <button onClick={deleteHandeler} className="p-2 px-3 rounded bg-red-500 text-white font-bold text-xs">Delete</button>
        </div>
        </div>
        <button className="absolute top-0 right-0 -translate-x-[100%] translate-y-[60%]" onClick={() => navigate(-1)}>
          <i className="ri-close-line hover:opacity-60 text-3xl"></i>
        </button>
      </div>
      : <Loading/>
  )
};

export default ProductDetail;
