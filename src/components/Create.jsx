import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../utils/context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setProducts]= useContext(userContext)
  const navigate= useNavigate()
  const location= useLocation()
  console.log(location.pathname)
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });
  const handleSubmit = e => {
    if(formData.title.length<5 || formData.image.length<5 || formData.category.length<5 || formData.price<1 || formData.description<5) {alert("Input characters must be more than 5!"); return}
    e.preventDefault();
    const {title, image, category, price, description}= formData;
    const newProduct = {id:nanoid(),title, image, category, price, description}
    setProducts(prev=>[...prev, newProduct])
    localStorage.setItem(
      "products",
      JSON.stringify([...products, newProduct])
    );
    navigate(-1);
  };
  return (
    <div className="w-full h-screen min-h-screen flex flex-col justify-center items-center ">
        <div className="w-[40%] relative">
        <h1 className="text-2xl font-bold mb-5">Add a product</h1>
        <button className='absolute right-0 top-0 p-2 px-3 rounded bg-blue-500 text-white font-bold text-xs' onClick={()=>navigate(-1)}>Go back</button>
        </div>
      <form className="w-[40%]" action="" onSubmit={handleSubmit}>
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100"
          type="text"
          placeholder="title"
          onChange={e => {
            setFormData((prev) => ({ ...prev, title: e.target.value }));
          }}
          value={formData.title}
        />
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100"
          type=""
          placeholder="image-url"
          onChange={e => {
            setFormData((prev) => ({ ...prev, image: e.target.value }));
          }}
          value={formData.image}
        />
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100 w-[48%] mr-[4%]"
          type="text"
          placeholder="category"
          onChange={e => {
            setFormData((prev) => ({ ...prev, category: e.target.value }));
          }}
          value={formData.category}
        />
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100 w-[48%]"
          type="number"
          placeholder="price"
          onChange={e => {
            setFormData((prev) => ({ ...prev, price: e.target.value }));
          }}
          value={formData.price}
        />
        <textarea
          className="w-full bg-zinc-100"
          rows="10"
          placeholder="Enter product description here..."
          onChange={e => {
            setFormData((prev) => ({ ...prev, description: e.target.value }));
          }}
          value={formData.description}
        ></textarea>
        <input type="submit" value="Add" className="cursor-pointer h-fit px-7 py-2 border border-zinc-300 rounded text-sm font-semibold" />

      </form>
    </div>
  );
};

export default Create;
