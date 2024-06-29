import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { userContext } from "../utils/context";
import { nanoid } from "nanoid";

const Edit = () => {
  const [products, setProducts]= useContext(userContext)
//   console.log(products)
  const navigate= useNavigate()
  const {id}= useParams();
  const editableProduct= products.filter(products=>products.id.toString()===id)[0];
  const [formData, setFormData] = useState({
    id: editableProduct.id,
    title: editableProduct.title,
    image: editableProduct.image,
    category: editableProduct.category,
    price: editableProduct.price,
    description: editableProduct.description
  });
  const handleSubmit = e => {
    if(formData.title.length<5 || formData.image.length<5 || formData.category.length<5 || formData.price<1 || formData.description<5) {alert("Input characters must be more than 5!"); return}
    e.preventDefault();
    // const {id, title, image, category, price, description}= formData;
    console.log(formData,id)
    const editedProducts= products.map(product=>{
        if(product.id.toString()==id) return {...formData}
        return product;
    })
    setProducts(editedProducts)
    localStorage.setItem(
      "products",
      JSON.stringify(editedProducts)
    );
    navigate(-1);
  };
  return (
    <div className="w-full h-screen min-h-screen flex flex-col justify-center items-center ">
        <div className="w-[40%] relative">
        <h1 className="text-2xl font-bold mb-5">Edit product</h1>
        <button className='absolute right-0 top-0 p-2 px-3 rounded bg-blue-500 text-white font-bold text-xs' onClick={()=>navigate(-1)}>Go back</button>
        </div>
      <form className="w-[40%]" action="" onSubmit={handleSubmit}>
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100"
          type="text"
          placeholder="title"
          onChange={e => {
            setFormData((prev) => ({ ...prev, title: e.target.value }));
            // console.log(formData)
          }}
          value={formData.title}
        />
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100"
          type=""
          placeholder="image-url"
          onChange={e => {
            setFormData((prev) => ({ ...prev, image: e.target.value }));
            // console.log(formData)
          }}
          value={formData.image}
        />
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100 w-[48%] mr-[4%]"
          type="text"
          placeholder="category"
          onChange={e => {
            setFormData((prev) => ({ ...prev, category: e.target.value }));
            // console.log(formData)
          }}
          value={formData.category}
        />
        <input
          className="w-full m-auto p-2 mb-3 bg-zinc-100 w-[48%]"
          type="number"
          placeholder="price"
          onChange={e => {
            setFormData((prev) => ({ ...prev, price: e.target.value }));
            // console.log(formData)
          }}
          value={formData.price}
        />
        <textarea
          className="w-full bg-zinc-100"
          rows="10"
          placeholder="Enter product description here..."
          onChange={e => {
            setFormData((prev) => ({ ...prev, description: e.target.value }));
            // console.log(formData) 
          }}
          value={formData.description}
        ></textarea>
        <input type="submit" value="Save" className="cursor-pointer h-fit px-7 py-2 border border-zinc-300 rounded text-sm font-semibold" />

      </form>
    </div>
  );
};

export default Edit;
