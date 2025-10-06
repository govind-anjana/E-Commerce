import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { increaseQty, decreaseQty, removeItem } from "../Redux/CardSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function CardPage() {
  const navigate=useNavigate()
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [giftBox, setGiftBox] = useState(true);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white shadow-md mt-4">
        <button className="font-semibold flex items-center gap-2">
          <FaAngleLeft size={24} onClick={()=>navigate(-1)}/> Back
        </button>
        <button className="font-semibold">
          <IoShareSocialOutline size={28} />
        </button>
      </div>
      <div className="flex flex-col md:flex-row p-4 my-1 gap-5">
        <div className="flex-1 flex flex-col">
          <div className="text-start">
            <h2 className="text-4xl font-bold pb-1">My Cart</h2>
            <p className="text-gray-500 text-md">Let's create your account</p>
            <h3 className="font-semibold mt-4">
              Number of Items :<span className="text-gray-600">({cartItems.length})</span>
            </h3>
          </div>
          <div className="rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm border-separate border-spacing-4">
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="">
                    <td className=" w-20">
                      <img
                        src={item.img || "https://via.placeholder.com/100"}
                        className="w-20 h-22 p-1 rounded shadow"
                      />
                    </td>

                    <td className="">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-600 text-sm">
                        Color: {item.color || "Black"}
                      </p>
                    </td>

                    <td className="p-2 text-gray-600">₹{item.price}</td>

                    <td className="p-2">
                      <div className="border px-1 py-1 flex items-center rounded w-fit text-gray-600">
                        <button
                          onClick={() => dispatch(decreaseQty(item.id))}
                          className="font-semibold text-xl px-2 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-semibold px-2">{item.qty}</span>
                        <button
                          onClick={() => dispatch(increaseQty(item.id))}
                          className="font-semibold text-xl px-2 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-2 font-semibold text-gray-600">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </td>

                    <td className="p-2">
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="cursor-pointer text-gray-600 hover:text-gray-500"
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <Link to="/customer"><button className="w-full mt-4 font-semibold bg-blue-500 text-white py-2 shadow rounded hover:bg-blue-600 cursor-pointer">
            SHOP NOW
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default CardPage;
