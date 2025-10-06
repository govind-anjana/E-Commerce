import React from "react";
import IPhone from "../../assets/iphone.png";
import IPhone2 from "../../assets/IPhone2.png";
import Realme from "../../assets/Realme.png";
import Mi from "../../assets/Mi.png";
import Sum from "../../assets/Sum.png";

import Cover from "../../assets/Cover.png";
import Cover2 from "../../assets/Cover2.png";
import Cover3 from "../../assets/Cover3.png";

import { FaApple } from "react-icons/fa6";
import { SiSamsung ,SiXiaomi,SiRemark} from "react-icons/si";
// import { SiRealme } from "react-icons/si";
// import { SiXiaomi } from "react-icons/si"; 

function Brands() {
  const brandCards = [
    {
      name: "IPHONE",
      offer: "Up to 80% OFF",
      icon: <FaApple className="bg-white p-1 rounded-2xl" size={45} />,
      img: Cover,
      img2: IPhone2,
      color: "bg-gray-900",
     
    },
    {
      name: "REALME",
      offer: "Flat 60% OFF",
      icon: <SiRemark className="bg-white p-2 rounded-2xl" size={45} />,
      img: Cover2,
      img2: Realme,
      color: "bg-amber-400",
      
    },
    {
      name: "XIAOMI",
      offer: "Min 40% OFF",
      icon: <SiXiaomi className="bg-black text-white p-1 rounded-2xl" size={45} />,
      img: Cover3,
      img2: Mi,
      color: "bg-orange-300",
      
    },
    {
      name: "SAMSUNG",
      offer: "Min 30% OFF",
      icon: <SiSamsung className="bg-white p-1 rounded-2xl" size={45} />,
      img: Cover,
      img2: Realme,
      color: "bg-gray-700",
      
    },
  ];

  return (
    <div className="my-7">
      <h1 className="text-start text-2xl py-2 font-semibold">
        TOP <span className="text-amber-300">ELECTRONICS BRANDS</span>
      </h1>
      <hr />
      <div className="flex flex-wrap justify-center gap-2 my-6">
        {brandCards.map((brand, index) => (
          <div
            key={index}
            className={`${brand.color} flex justify-between w-73 h-44 rounded-md shadow-md overflow-hidden`}
          >
            
            <div className="text-start flex flex-col justify-between p-3">
              <span className="text-md bg-gray-600 text-white px-2 py-1 rounded-md font-semibold ">
                {brand.name}
              </span>
              <div>{brand.icon}</div>
              <h4 className="font-semibold text-white">{brand.offer}</h4>
            </div>

           
            <div className="w-1/2 relative flex ">
             
              <img
                src={brand.img}
                alt={`${brand.name} cover`}
                className="w-full h-32 object-cover rounded-md"
              />
             <div className="absolute top-1 left-9 ">
              <img
                src={brand.img2}
                alt={brand.name}
                className=" h-64 w-25 object-cover  z-10"
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
