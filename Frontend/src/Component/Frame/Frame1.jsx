import React from "react";
import { CiDeliveryTruck, CiCreditCard1} from "react-icons/ci";
import { GoTrophy } from "react-icons/go";
import { IoHeadsetOutline } from "react-icons/io5";
function Frame1() {
  const frames = [
    {
      hea: "Fastest Delivery",
      per: "Delivery in 24H",
      icon: <CiDeliveryTruck size="30" />,
    },
    {
      hea: "24 Hours Return",
      per: "Return within 24H",
      icon: <GoTrophy size="30" />,
    },
    {
      hea: "Secure Payment",
      per: "100% Safe Payment",
      icon: <CiCreditCard1 size="30" />,
    },
    { hea: "Customer Support", per: "24/7 Support",icon:<IoHeadsetOutline size="30" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-4 my-4 p-4 shadow">
      {frames.map((frame, idx) => (
        <div
          key={idx}
          className="flex items-center bg-white px-2 md:px-7 py-2 rounded-lg shadow-md min-w-[200px]"
        >
          <div className="text-blue-500 mr-3">{frame.icon}</div>
          <div>
            <p className="font-semibold text-gray-800">{frame.hea}</p>
            <p className="text-gray-600 text-sm">{frame.per}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Frame1;
