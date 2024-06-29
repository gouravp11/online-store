import React, { useContext } from "react";
import { userContext } from "../utils/context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products]= useContext(userContext);
  const uniqueCategories= [...new Set(products.map((products,i) =>products.category))];
  return (
    <div className="h-screen w-[15%] p-[2vw] bg-zinc-200 flex flex-col">
      <Link to="/create" className="h-fit px-5 py-2 bg-zinc-300 rounded text-sm font-bold">
        Add a product
      </Link>
      <h1 className="text-xl font-bold my-2 mt-6">Category:</h1>
      <div className="h-fit">
      {uniqueCategories.map((category,i)=><Link to={`/?category=${category}`} key={i} className="flex items-center gap-2 mb-1 text-sm font-semibold text-zinc-600">
          <span className="h-2 w-2 rounded-full bg-blue-400"></span>{category}
        </Link >)}
      </div>
    </div>
  );
};

export default Nav;
