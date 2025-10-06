import React from "react";
import image1 from "../../assets/zam.png";
import image2 from "../../assets/DG.png"; 
import image3 from '../../assets/HM.png'
import image4 from '../../assets/chanel.png'
import image5 from '../../assets/Prada.png';
import image6 from '../../assets/Biba.png';


function Frame2() {
  const images = [image1, image2, image3, image4,image5,image6]; 
  return (
    <div className="my-5 shadow">
      <h1 className="text-start text-2xl py-1 font-semibold  capitalize">
        Shop By <span className="text-amber-300">Brands</span>
      </h1>
      <div className="flex justify-between overflow-x-auto gap-6 p-2">
  {images.map((img, idx) => (
    <div
      key={idx}
      className="flex-none w-38 h-26 md:w-[110px] md:h-[70px] flex justify-evenly items-center p-5 rounded bg-gray-100 border hover:shadow-lg"
    >
      <img
        src={img}
        alt={`brand-${idx}`}
        className="h-full w-auto object-contain"
      />
    </div>
  ))}
</div>

    </div>
  );
}

export default Frame2;
