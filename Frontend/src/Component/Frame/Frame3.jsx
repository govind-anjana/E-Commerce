import React from "react";
import Remdi from "../../assets/Redmi.png";
import Poco from "../../assets/Poco.png";
import { addToCart } from "../Redux/CardSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

function Frame3() {
  const [products,setProducts]=useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchapi=async()=>{
      const res=await axios.get("http://localhost:4000/api/ShowProduct");
       setProducts(res.data.data); 
  }
  fetchapi();
  },[]);
  const product = [
    { id: 1, name: "Adidas 4DFWD X", img: Remdi, price: 11999, qty: 1,dis:5 },
    { id: 2, name: "Poco Air Zoom", img: Poco, price: 13999, qty: 1,dis:8 },
    { id: 3, name: "Redmi Note 13", img: Remdi, price: 15999, qty: 1,dis:5 },
    { id: 4, name: "Poco X6", img: Poco, price: 17999, qty: 1 ,dis:10},
    { id: 5, name: "Poco C65", img: Poco, price: 13999, qty: 1,dis:45 },
  ];

  return (
    <div className="mt-5">
      <h1 className="text-start text-2xl py-2 font-semibold capitalize">
        Today's <span className="text-amber-300">Deals of the Day</span>
      </h1>

      <div className="scrollber flex overflow-x-auto gap-12 p-3">
        {product.map((item,index) => (
          <div
            key={index}
            className="flex-none w-[240px] rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="w-full p-8 h-66 flex justify-center items-center bg-gray-100 rounded">
              <NavLink to="/Details" state={{items:item}}>
              <img
                src={item.img}
                 
                className="h-full p-3 object-contain"
                
              />
              </NavLink>
            </div>
            <div className="p-2 text-start">
              <h3 className="font-semibold text-gray-700">{item.name}</h3>
              <p className="text-sm text-gray-500">₹{item.price}</p>
              <button
                className="mt-2 px-4 py-1 bg-gray-900 text-white rounded hover:bg-gray-600 transition w-full font-semibold cursor-pointer"
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frame3;
