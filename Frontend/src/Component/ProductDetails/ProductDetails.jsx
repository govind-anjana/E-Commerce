import React, { useRef, useState } from "react";
import Short from "../../assets/Short.png";
import Review from "../../assets/Review.png";
import Laptop from "../../assets/Laptop.png";
import Laptop1 from "../../assets/Laptop1.png";
import Laptop2 from "../../assets/Laptop2.png";
import Laptop3 from "../../assets/Laptop3.png";
import Laptop4 from "../../assets/Laptop4.png";
import Laptop5 from "../../assets/Laptop5.png";
import { CiHeart } from "react-icons/ci";
import { FiRefreshCw } from "react-icons/fi";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import {
  FaRegCopy,
  FaFacebook,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import { TbShoppingBagCheck } from "react-icons/tb";
import { BsTagFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Details from "./Details";
import TogetherPage from "../TogetherDetails/TogetherPage";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CardSlice";
function ProductDetails() {
  const [count, setCount] = useState(1);
  const location = useLocation();
  const { items } = location.state;
  const dispatch = useDispatch();
  console.log(items);
  const [selectedColor, setSelectedColor] = useState("");
  const scrollRef = useRef(null);
  const colors = [
    { name: "Gray", class: "bg-gray-500" },
    { name: "Blue", class: "bg-blue-700" },
    { name: "Red", class: "bg-red-500" },
  ];
  const scrollPrev = () => {
    scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollNext = () => {
    scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  const images = [Laptop, Laptop1, Laptop2, Laptop3, Laptop4, Laptop5, Laptop];

  return (
    <>
      <div className="py-10 px-1 flex flex-col md:flex-row gap-4 justify-center">
        <div className="flex flex-col justify-center md:w-1/3 rounded-md">
          <div className=" w-60 mx-auto">
            <img
              src={items.img}
              alt="Product"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="relative my-4 w-fit mx-auto">
            <button
              onClick={scrollPrev}
              className="absolute top-10 -left-3 z-10 p-2 bg-gray-900 hover:bg-gray-950 opacity-65 rounded-full text-white"
            >
              <GrLinkPrevious size={25} />
            </button>

            <button
              onClick={scrollNext}
              className="absolute top-10 -right-3 z-10  bg-gray-900 hover:bg-gray-950 opacity-65 rounded-full p-2 text-white"
            >
              <GrLinkNext size={25} />
            </button>

            <div
              ref={scrollRef}
              className="scrollber flex gap-1 overflow-x-auto scroll-smooth  pt-5 pb-2"
              style={{ maxWidth: "320px" }}
            >
              {images.map((item, index) => (
                <div
                  key={index}
                  className="w-20 h-20 flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item}
                    alt="thumb"
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col text-start rounded-md md:w-1/2 space-y-3">
          <div className="flex items-center flex-wrap gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <img key={i} src={Review} alt="star" className="w-5" />
              ))}
            <span className="font-semibold text-gray-800">4.7 Star Rating</span>
            <span className="text-gray-400 text-sm">
              (21,671 User feedback)
            </span>
          </div>

          <p className="text-xl font-semibold text-gray-800">
            {items.name} (13-inch, 8GB RAM, 256GB SSD Storage)
          </p>

          <table className="w-full text-gray-500 font-semibold">
            <tbody>
              <tr>
                <td className="pr-2">
                  SKU : <span className="text-black">A264641</span>
                </td>
                <td className="md:pl-34">
                  Availability :
                  <span className="text-emerald-600">In Stock</span>
                </td>
              </tr>
              <tr>
                <td>
                  Brand : <span className="text-black">Apple</span>
                </td>
                <td className="py-0 md:pl-34">
                  Category :
                  <span className="text-black">Electronics Devices </span>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-xl mb-0 py-1 font-semibold text-emerald-600">
            Rs.{(items.price - (items.price * items.dis) / 100).toFixed(2)}
            <span className="px-1 line-through font-normal text-gray-500">
              {items.price}
            </span>
            <span className="mx-2 text-black px-2 pb-1 rounded bg-yellow-400">
              {items.dis} % OFF
            </span>
          </p>

          <div className="flex justify-between md:mb-2 my-3 items-center">
            <div className="font-semibold">
              Get It for <span className="text-emerald-600">90,0000</span>
            </div>
            <div className="border rounded-2xl px-2 py-1 flex items-center w-fit text-gray-600">
              <button
                onClick={() => setCount(count - 1)}
                className="font-semibold text-xl px-2 cursor-pointer"
              >
                -
              </button>
              <span className="font-semibold px-2 w-8 text-center">
                {count}
              </span>
              <button
                onClick={() => setCount(count + 1)}
                className="font-semibold text-xl px-2 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <hr />

          <table className="w-full ">
            <tbody>
              <tr>
                <td className="pr-2 ">
                  Color <br />
                  <div className="py-2 flex gap-3">
                    {colors.map((color) => (
                      <label
                        key={color.name}
                        className="cursor-pointer relative"
                      >
                        <input
                          type="radio"
                          name="color"
                          className="peer sr-only"
                          checked={selectedColor === color.name}
                          onChange={() => setSelectedColor(color.name)}
                        />
                        <span
                          className={`w-8 h-8 rounded-full ${color.class} border-2  border-gray-300 
                        peer-checked:border-black flex items-center justify-center`}
                        >
                          {selectedColor === color.name && (
                            <span className="w-3 h-3 rounded-full ring-2 ring-white"></span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                </td>
                <td className="pl-8">
                  Size
                  <br />
                  <select className="w-full border-1 border-gray-400 rounded px-2 py-2 focus:outline-none text-md text-gray-600 ">
                    <option>14-inch Liquid Retina XDR Display</option>
                    <option>16-inch Liquid Retina XDR Display</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  Memory
                  <br />
                  <select className="w-full border-1 border-gray-400 rounded px-2 py-2 focus:outline-none text-md text-gray-600">
                    <option>16GB unicfied Memory</option>
                    <option>18GB unicfied Memory</option>
                  </select>
                </td>
                <td className="pl-8">
                  Storage
                  <br />
                  <select className="w-full border-1 border-gray-400 rounded px-2 py-2 focus:outline-none text-md text-gray-600">
                    <option>1 TV SSD Storage</option>
                    <option>2 TV SSD Storage</option>
                    <option>3 TV SSD Storage</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between flex-wrap font-semibold gap-3  my-3">
            <button className="bg-black text-white px-7 py-2 rounded-2xl hover:bg-gray-600 flex items-center cursor-pointer">
              <BsTagFill size={23} />
              &nbsp; GET DEAL (90k)
            </button>
            <button
              className="border-2 rounded-2xl border-blue-500 px-6 py-2  hover:bg-gray-100 text-blue-500 flex items-center cursor-pointer"
              onClick={() => dispatch(addToCart(items))}
            >
              <MdOutlineLocalGroceryStore size={23} />
              &nbsp; Add
            </button>
            <button className="rounded-2xl bg-blue-500 border-blue-500 px-6 py-2 text-white flex  hover:bg-blue-600 cursor-pointer">
              <TbShoppingBagCheck size={23} /> &nbsp; Buy
            </button>
          </div>
          <div className="my-3 flex justify-between flex-wrap text-sm gap-3  p-2">
            <div className="text-gray-500 flex">
              <CiHeart size={23} />
              Add to Wishlist <FiRefreshCw size={20} className="ml-5" />
              Add To Compare
            </div>
            <div className="text-gray-500 flex cursor-pointer">
              Share Product : <FaRegCopy size={20} className="mr-2" />{" "}
              <FaFacebook size={20} className="mr-2 text-amber-300" />{" "}
              <FaTwitter className="mr-2" size={20} />
              <FaPinterestP className="mr-2" size={20} />
            </div>
          </div>
        </div>
      </div>
      <Details />
      <TogetherPage />
    </>
  );
}

export default ProductDetails;
