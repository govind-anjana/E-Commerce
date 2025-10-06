import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
function AddressCard({ item, onEdit }) {
  return (
    <div className="border rounded-xl border-gray-500 w-[70%] sm:w-[48%]">
      <div className="p-2 flex  justify-between text-base font-semibold">
        <h3 className="capitalize">{item.address}</h3>
        <span
          className="text-gray-500 cursor-pointer flex"
          onClick={() => onEdit(item)}
        >
          <AiOutlineEdit size={23} className="mr-1" />
          Edit
        </span>
      </div>
      <p className="px-2 pb-2 leading-5 capitalize  text-base text-gray-700 ">
        {item.name}
        <br />
        {item.phone}
        <br />
        
          {item.house} {item.work} {item.area}, {item.city},{item.state}[
          {item.pincode}]
        </p>
      
    </div>
  );
}

export default AddressCard;
