import React from "react";
import To1 from "../../assets/To1.png";
import To2 from "../../assets/To2.png";
import To3 from "../../assets/To3.png";
import To4 from "../../assets/To4.png";
import Review from "../../assets/Review.png";
function Page() {
  const Together = [
    {
      img: To1,
      name: "BenQ ScreenBar Halo LED Monitor Light",
    },
    {
      img: To2,
      name: "Honeywell Newly Launched 4-in-1 Ultra Slim USB Hub",
    },
    {
      img: To3,
      name: "STRIFF Adjustable Laptop Tabletop Stand",
    },
    {
      img: To4,
      name: "Dyazo Water Resistant Laptop Sleeve ",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
      {Together.map((item, index) => (
        <div key={index} className=" rounded-xl p-6 ">
          <div className="h-52 flex justify-center items-center rounded-md bg-gray-100 px-8">
            <img
              src={item.img}
              alt={item.name}
              className="h-40 object-contain"
            />
          </div>
          <h3 className="text-start text-lg font-semibold text-gray-800 mt-3 leading-6">
            {item.name}
          </h3>
          <p className="text-sm font-semibold flex mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <img key={i} src={Review} alt="star" className="w-5" />
              ))}
            &nbsp; 4.7 <span className="text-gray-500 pl-3"> (21,671 Rating) </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Page;
