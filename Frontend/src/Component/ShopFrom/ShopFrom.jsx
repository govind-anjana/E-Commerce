import React, { useState, useEffect } from "react";
import Phone from "../../assets/Phone.png";
import Cosmetic from "../../assets/Cosmetic.png";
import Electronic from "../../assets/Electroic.png";
import Funiture from "../../assets/Funiture.png";
import Watch from "../../assets/Watches.png";
import Decor from "../../assets/Decor.png";
import Accessories from "../../assets/Accessories.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import {addToCart} from '../Redux/CardSlice'
import { NavLink } from "react-router-dom";

function ShopFrom() {
  const [names, setNames] = useState("Mobile");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()
  const ShowProduct = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/ShowCategories");
      console.log(res.data.data);
      // const cate=await axios.get("https://dummyjson.com/products/search?q=phone")
      // console.log(cate.data[products]);
      setProducts(res.data.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ShowProduct();
  }, []);

  const Categories = [
    { img: Phone, name: "Mobile" },
    { img: Cosmetic, name: "Cosmetics" },
    { img: Electronic, name: "Electronic" },
    { img: Funiture, name: "Funiture" },
    { img: Watch, name: "Watches" },
    { img: Decor, name: "Decor" },
    { img: Accessories, name: "Accessories" },
  ];

  const filteredProducts = products.filter(
    (p) => p.category?.toLowerCase() === names.toLowerCase()
  );

  return (
    <div className="mt-5">
      <h1 className="text-start text-2xl py-2 font-semibold capitalize">
        Shop From <span className="text-amber-300">Top Categories</span>
      </h1>
      <hr />

      <div className="overflow-x-auto flex gap-10 my-2">
        {Categories.map((item, i) => (
          <div
            key={i}
            className={`flex  justify-center items-center flex-wrap rounded-lg p-4 hover:shadow-lg cursor-pointer transition `}
            onClick={() => setNames(item.name)}
          >
            <div
              className={`w-23 h-23 flex justify-center items-center bg-gray-100  rounded-full mb-3 ${
                names === item.name ? "border border-blue-600" : ""
              }`}
            >
              <img src={item.img} className="w-14 h-14 object-contain" />
            </div>
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">{names} Products</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p>No products found for {names}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className=" rounded-lg p-3 shadow-sm hover:shadow-lg transition"
              ><NavLink to="/Details" state={{items:product}}>
                <img
                  src={product.img}
                  className="w-60 h-50 object-contain mx-auto mb-2"
                /></NavLink>
                <h3 className="font-semibold text-sm  text-justify">
                  {product.name}
                </h3>

                <h3 className="mt-2 font-semibold text-start text-sm">
                  <span className="text-base">
                    {" "}
                    ₹
                    {(
                      product.price -
                      (product.price * parseFloat(product.dis)) / 100
                    ).toFixed(1)}
                  </span>
                  &nbsp;{" "}
                  <span className="text-gray-500 line-through">
                    {" "}
                    ₹{product.price}
                  </span>
                  <p className="float-right text-white px-2 rounded py-1 bg-gray-600">
                    {product.dis} OFF
                  </p>{" "}
                </h3>
                <button
                  className="mt-4  px-4 py-1 bg-gray-900 text-white rounded hover:bg-gray-600 transition w-full font-semibold cursor-pointer"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopFrom;
