import React, { useState,useEffect, useContext } from "react";
import axios from "axios"
import "../../App.css"
import { CartContext } from "../../context/CartContext";
const Products = () => {
  const {products,setData} = useContext(CartContext);

    useEffect(()=>{
      const getData= async ()=>{
        let res = await axios.get("http://localhost:8080/products");
        let data=res.data;
        setData(data)
      }
      getData();
     },[]);
  return(
     <div className="flex">
        {products.map((use)=>(
            <div >
              <h3 data-cy="product-name">{use.name}</h3>
              <h6 data-cy="product-description">{use.description}</h6>
              <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
            </div>
        ))}
     </div>
    )
};

export default Products;
