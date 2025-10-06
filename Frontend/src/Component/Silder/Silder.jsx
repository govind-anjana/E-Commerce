import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Frame1 from "../Frame/Frame1";
import Frame2 from "../Frame/Frame2";
import Frame3 from "../Frame/Frame3";
import ShopFrom from "../ShopFrom/ShopFrom";
import Frame4 from "../Frame/Frame4";
import Brands from "../Brands/Brands";

function Silder() {
  const arr = [
    {
      name: "This is a lovely perennial you can add to your garden.",
      h: "Agapanthus africanus",
      di: "UP to 80 % Off",
      img: "https://www.epicgardening.com/wp-content/uploads/2025/06/Agapanthus-africanus.jpg",
    },
    {
      name: "Marigolds are a long-blooming annual that bring tons of color to the garden.",
      h: "Tagetes erecta",
      di: "UP to 80 % Off",
      img: "https://www.epicgardening.com/wp-content/uploads/2025/01/African-Marigold.jpg",
    },
    {
      name: "These flowers are commonly found indoors where the conditions are ideal for growth.",
      h: "Streptocarpus ionanthus",
      di: "UP to 80 % Off",
      img: "https://www.epicgardening.com/wp-content/uploads/2023/09/African-Violet.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? arr.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === arr.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <div className="relative w-full mx-auto mt-5">
      <div className="flex flex-col-reverse md:flex-row items-center bg-gray-700 shadow-sm rounded-lg overflow-hidden">
        <div className="p-5  md:w-1/2 ">
          <h2 className="text-xl md:text-2xl  text-white uppercase font-semibold">
            {arr[index].h}
          </h2>
          <p className="text-sm md:text-base mx-4 text-gray-200 mt-2">
            {arr[index].name}
          </p>
          <p className="text-red-500 font-semibold mt-2">{arr[index].di}</p>
        </div>

        <div className="md:w-1/2 rounded-2xl overflow-hidden my-5">
          <img
            src={arr[index].img}
            alt={arr[index].h}
            className="mx-auto h-60 md:h-72 object-contain rounded-2xl "
          />
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 cursor-pointer"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
    <Frame1/>
    <Frame2/>
    <Frame3/>
    <ShopFrom/>
    <Brands/>
    <Frame4/>
    </>
  );
}

export default Silder;
