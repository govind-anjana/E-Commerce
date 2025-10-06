import React, { useState } from "react";
import { FiAward ,FiHeadphones } from "react-icons/fi";
import { PiTruck } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { LuHandshake } from "react-icons/lu";
function Details() {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <div className="font-semibold text-md flex mt-3  md:justify-center items-center text-gray-500 border overflow-auto  border-gray-200 p-0">
        <button
          onClick={() => setActiveTab("description")}
          className={`cursor-pointer uppercase p-3 transition-colors duration-200 ${
            activeTab === "description"
              ? "text-black border-b-2 border-amber-400 bg-gray-100"
              : "hover:text-black hover:bg-gray-50"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("info")}
          className={`cursor-pointer whitespace-nowrap break-words uppercase p-3 transition-colors duration-200 ${
            activeTab === "info"
              ? "text-black border-b-2 border-amber-400 bg-gray-100"
              : "hover:text-black hover:bg-gray-50"
          }`}
        >
          Additional information
        </button>
        <button
          onClick={() => setActiveTab("specification")}
          className={`cursor-pointer uppercase p-3 transition-colors duration-200 ${
            activeTab === "specification"
              ? "text-black border-b-2 border-amber-400 bg-gray-100"
              : "hover:text-black hover:bg-gray-50"
          }`}
        >
          Specification
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`cursor-pointer uppercase p-3 transition-colors duration-200 ${
            activeTab === "review"
              ? "text-black border-b-2 border-amber-400 bg-gray-100"
              : "hover:text-black hover:bg-gray-50"
          }`}
        >
          Review
        </button>
      </div>

       
      <div
        className={`p-3 text-gray-700 border-t-0 border-gray-200 text-start border transition-opacity duration-500 ${
          activeTab ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeTab === "description" && (
          <div className="flex flex-col md:flex-row justify-between gap-6 p-1">
           
            <div className="md:w-1/2">
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-sm leading-relaxed px-2 text-justify text-gray-600">
                The most powerful MacBook Pro ever is here. With the blazing-fast
                M1 Pro or M1 Max chip — the first Apple silicon designed for pros
                — you get groundbreaking performance and amazing battery life. Add
                to that a stunning Liquid Retina XDR display, the best camera and
                audio ever in a Mac notebook, and all the ports you need. The first
                notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the
                exceptional performance of the M1 architecture to a whole new level
                for pro users.
              </p>
            </div>   
            <div className="flex justify-between flex-wrap md:w-1/2 space-y-4">
              <div className="">
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className=" list-inside space-y-1 text-sm">
                  <li className="flex"><FiAward size={24} className="mr-2 text-green-400"/>Free 1 Year Warranty</li>
                  <li className="flex"><PiTruck size={24} className="mr-2 text-green-400"/>Free Shipping & Fastest Delivery</li>
                  <li className="flex"><LuHandshake size={24} className="mr-2 text-green-400"/>100% Money-back guarantee</li>
                  <li className="flex"><FiHeadphones size={24} className="mr-2 text-green-400"/>24/7 Customer support</li>
                  <li className="flex"><CiCreditCard1 size={24} className="mr-2 text-green-400"/>Secure payment method</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Shipping Information</h3>
                <ul className="space-y-1">
                  <li>
                    <span className="font-semibold">Courier:</span> 2 - 4 days, free shipping
                  </li>
                  <li>
                    <span className="font-semibold">Local Shipping:</span> up to one week, ₹19.00
                  </li>
                  <li>
                    <span className="font-semibold">UPS Ground Shipping:</span> 4 - 6 days, ₹29.00
                  </li>
                  <li>
                    <span className="font-semibold">Unishop Global Export:</span> 3 - 4 days, ₹39.00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <p className="text-sm text-gray-600">
            Here is some additional information about the product...
          </p>
        )}

        {activeTab === "specification" && (
          <p className="text-sm text-gray-600">
            Product specifications will be shown here...
          </p>
        )}

        {activeTab === "review" && (
          <p className="text-sm text-gray-600">
            Customer reviews will be displayed here...
          </p>
        )}
      </div>
    </>
  );
}

export default Details;
