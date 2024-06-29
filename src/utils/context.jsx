import { json } from 'react-router-dom';
import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'
export const userContext= createContext();
const Context = (props) => {
    const [products, setProducts]=useState(JSON.parse(localStorage.getItem('products')) || null)
    const productsFetcher = async () =>{
        try{
           const {data}= await axios.get("/products")
           setProducts(data)
        }
        catch(err){
            console.error(err)
        }
        // axios.get("/products")
        // .then(response => setProducts(response.data))
        // .catch(err=>console.error(err));
    }
    useEffect(()=>{
        // productsFetcher()
    },[])
  return (
    <userContext.Provider value={[products, setProducts]}>{props.children}</userContext.Provider>
  )
}

export default Context
