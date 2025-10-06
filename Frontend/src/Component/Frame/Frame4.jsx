import React from "react";
import Game from "../../assets/Game.png";
import Drown from "../../assets/Drown.png";
import Simple from "../../assets/Simple.png";
import K from "../../assets/4K.png";
import Sony from "../../assets/Sony.png";
import Phone4 from "../../assets/Phone4.png";
import Portable from "../../assets/Portable.png";
import LED from "../../assets/LED.png";
import Bluetooth from "../../assets/Bluetooth.png";
import Review from '../../assets/Review.png';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import {NavLink, useNavigate} from 'react-router-dom';

function Frame4() {
  const navigator=useNavigate();
 
  const products = [
    { id: 1, name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear", price: 22300, img: Drown,dis:33 },
    { id: 2, name: "Simple Mobile 4G LTE Prepaid Smartphone", price: 14999, img: Simple,dis:10 },
    { id: 3, name: "4K UHD LED Smart TV with Chromecast Built-in", price: 8999, img:  K,dis:8},
    { id: 5, name: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: 12999, img: Sony ,dis:15},
    { id: 4, name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 17999, img: Phone4,dis:11 },
    { id: 6, name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM", price: 12999, img: Portable ,dis:18},
    { id: 7, name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower", price: 999, img: LED ,dis:4},
    { id: 8, name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker", price: 11999, img: Bluetooth,dis:2 },
  ];

  return (
    <div className="mt-5">
      <h1 className="text-start text-2xl py-2 font-bold">
        FREQUENTLY BOUGHT TOGETHER
      </h1>

      <div className="p-2 flex flex-wrap md:flex-nowrap" >
         
        <div className="p-3 w-[335px] border border-gray-500  shadow-sm">
          <img
            src={Game}
            alt="Xbox Series S"
            className="w-40 h-56 object-contain mx-auto"
          />
          <div className="text-start">
            <p className="text-gray-500">{Array(5).fill(0).map((e,i)=><img key={i} src={Review} className="w-6 float-left"/>)}(52,677)</p>
            <h3 className="text-md mt-2 font-semibold line-clamp-2 text-justify">
              Xbox Series S - 512GB SSD With Wireless Controller - EV Version
            </h3>
            <p className="text-md font-semibold text-cyan-500 py-2">$865.99</p>
            <p className="text-sm font-semibold text-justify text-gray-500">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times and visuals.
            </p>
            <div className="mt-3 gap-3 flex justify-between items-center">
            <FaRegHeart size={26}/>
              <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-semibold flex justify-center">
              <MdOutlineLocalGroceryStore size={20} />&nbsp;  ADD TO CART
              </button>
              <IoEyeOutline size={28}/>
            </div>
          </div>
        </div>

        <div className="md:my-0 mt-4 w-full flex md:justify-start justify-center md:gap-0 gap-5  flex-wrap">
          {products.map((item) => (
            <div key={item.id} className="p-2 border border-gray-500 w-56">
            <NavLink to="/Details" state={{items:item}}>
              <img
                src={item.img}
                alt={item.name}
                className="w-44 h-38 object-cover mx-auto cursor-pointer"
                
              />
              </NavLink>
              <p className="text-sm font-semibold text-start">{item.name}</p>
              <h3 className="mt-2 font-semibold text-start text-sm"><span className="text-base"> ₹{((item.price)-((item.price)*(item.dis)/100)).toFixed(1)}</span>
              &nbsp; <span className="text-gray-500 line-through"> ₹{item.price}</span>
             <p className="float-right text-white px-2 rounded py-1 bg-gray-600">{item.dis}% OFF</p> </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frame4;
