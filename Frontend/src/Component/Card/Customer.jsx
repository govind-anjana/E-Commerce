import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { increaseQty, decreaseQty, removeItem } from "../Redux/CardSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
function Customer() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [giftBox, setGiftBox] = useState(true);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white shadow-md mt-4">
        <button className="font-semibold flex items-center gap-2">
          <FaAngleLeft size={24} /> Back
        </button>
        <button className="font-semibold">
          <IoShareSocialOutline size={28} />
        </button>
      </div>
      <div className="flex flex-col md:flex-row p-4 my-1 gap-7">
        <div className="flex-1 flex flex-col">
          <div className="text-start">
            <h2 className="text-4xl font-bold pb-1">Customer Information</h2>
            <p className="text-gray-500 text-md">Let's create your account</p>
            <h3 className="font-semibold mt-4">Customer Information</h3>
          </div>
          <div className="rounded-lg overflow-hidden pb-2 text-start mt-1">
            <lable for="email" className="font-semibold text-gray-500">
              E-mail
            </lable>
            <input
              type="text"
              className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
            />
            <div className="flex justify-between mt-3">
              <div className="w-100">
                <lable className="font-semibold text-gray-500">
                  First Name
                </lable>
                <input
                  type="text"
                  className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
                />
              </div>
              <div className="w-100">
                <lable className="font-semibold text-gray-500">Full Name</lable>
                <input
                  type="text"
                  className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
                />
              </div>
            </div>
            <h3 className="font-semibold my-4">Shipping Address</h3>
            <lable for="country" className="font-semibold text-gray-500">
              Country
            </lable>
            <select
              className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
            >
                <option>India</option>
            </select>
            <div className="mt-3">
             <lable for="state" className="font-semibold text-gray-500">
              State/Region
            </lable>
            <select
              className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
            >
                <option>Melbourne</option>
                <option>India</option>
            </select>
            </div>
            <div className="mt-3">
                <lable for="state" className="font-semibold text-gray-500">
             Address
            </lable>
             <input
                  type="text"
                  className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
                />
            </div>
             <div className="mt-3">
                <lable for="phone" className="font-semibold text-gray-500">
             Phone Number
            </lable>
             <input
                  type="text"
                  className="w-full border-1 border-gray-400 rounded px-3 py-2 focus:outline-none "
                />
            </div>
            

          </div>
        </div>

        <div className="md:w-1/4 bg-gray-100 rounded-lg shadow p-4 md:mt-28 h-fit">
          <h3 className="text-md font-semibold pb-1 text-start">
            Order Summary
          </h3>
          <div className="flex justify-between mt-3 text-gray-500">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between  text-gray-500 mt-1">
            <span>Shipping</span>
            <span>₹{0}</span>
          </div>
          <div className="flex justify-between  text-gray-500 mt-1">
            <span>Tax</span>
            <span>₹{0}</span>
          </div>
          <div className="flex justify-between  text-gray-500 mt-1">
            <span>Discount Price</span>
            <span>₹{0}</span>
          </div>
          <div className="flex justify-between  text-gray-500 mt-1">
            <span>
              <input
                type="checkbox"
                className="w-4 h-4 mr-1"
                checked={giftBox}
                onChange={() => setGiftBox(!giftBox)}
              />
              Pack in a Gift Box
            </span>
            <span>₹{giftBox ? 10.09 : 0}</span>
          </div>
          <div className="flex border-t justify-between mt-2 font-semibold">
            <span>Total</span>
            <span>₹{(total + (giftBox ? 10.09 : 0)).toFixed(2)}</span>
          </div>
          <Link to="/customer">
            <button className="w-full mt-4 font-semibold bg-blue-500 text-white py-2 shadow rounded hover:bg-blue-600 cursor-pointer">
             NEXT
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Customer;
