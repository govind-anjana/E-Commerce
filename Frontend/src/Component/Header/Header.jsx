import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);
  const categories = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronic",
    "Beauty",
    "Home Improvement",
    // "Sports, Toys & Luggage",
  ];

  const subItems = {
    Groceries: ["Option1", "Option2"],
    "Premium Fruits": ["Fruits1", "Fruits2"],
    "Home & Kitchen": ["Item1", "Item2", "Item3"],
    Fashion: ["Men", "Women", "Kids"],
    Electronic: ["Mobiles", "Laptops", "Accessories"],
    Beauty: ["Skincare", "Makeup", "Fragrances"],
    "Home Improvement": ["Tools", "Decor"],
    "Sports, Toys & Luggage": ["Sports", "Toys", "Bags"],
  };
  function handleManu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="bg-gray-50 w-full sticky top-0 z-50">
      <div className="flex justify-between items-center mx-5 py-3 font-semibold">
        <h1 className="text-2xl text-blue-700">UNITED DEALS</h1>

        <input
          type="text"
          placeholder="Search"
          className="hidden md:block border border-black p-1 rounded w-60 focus:outline-none focus:border-blue-500 font-normal font-serif"
        />

        <nav className="hidden md:flex gap-7 capitalize items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-bold" : "hover:text-yellow-600"
            }
          >
            MY Deals
          </NavLink>

          {user ? (
            <NavLink
              to={`/Profile/${user.id}`}
              state={{ user }}
              className={({ isActive }) =>
                isActive ? "text-yellow-600 font-bold" : "hover:text-yellow-600"
              }
            >
              <FaUser size={20} className="inline" /> {user.name}
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-yellow-600 font-bold" : "hover:text-yellow-600"
              }
            >
              Sign Up / Sign In{" "}
            </NavLink>
          )}
          <div className="flex items-center gap-1 cursor-pointer">
            <NavLink
              to="/Card"
              className={({ isActive }) =>
                isActive ? "text-yellow-600 font-bold" : "hover:text-yellow-600"
              }
            >
              &nbsp; <AiOutlineShoppingCart size={20} className="inline" />{" "}
              <sup className="text-lg ">{cartItems.length}</sup>
            </NavLink>
          </div>
        </nav>
        <button className="md:hidden text-2xl" onClick={handleManu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-black p-2 rounded focus:outline-none focus:border-blue-500 font-normal font-serif my-3"
          />

          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-1 ${
                isActive ? "text-yellow-600 font-bold" : "hover:text-yellow-600"
              }`
            }
            onClick={handleManu}
          >
            MY Deals
          </NavLink>

          {user ? (
            <NavLink
              to={`/Profile/${user.id}`}
              state={{ user }}
              onClick={handleManu}
              className={({ isActive }) =>
                `block py-1 ${
                  isActive
                    ? "text-yellow-600 font-bold"
                    : "hover:text-yellow-600"
                }`
              }
            >
              <FaUser size={20} className="inline" /> {user.name}
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              onClick={handleManu}
              className={({ isActive }) =>
                `block py-1 ${
                  isActive
                    ? "text-yellow-600 font-bold"
                    : "hover:text-yellow-600"
                }`
              }
            >
              Sign Up / Sign In{" "}
            </NavLink>
          )}

          <NavLink
            to="/Card"
            className={({ isActive }) =>
              ` py-2 border-b flex justify-center items-center gap-1 ${
                isActive ? "text-yellow-600 font-bold" : "hover:text-yellow-600"
              }`
            }
            onClick={handleManu}
          >
            <AiOutlineShoppingCart size={20} className="inline" />
            <sup className="text-lg ">{cartItems.length}</sup>
          </NavLink>

          <ul className="mt-3 overflow-y-auto max-h-[70vh]">
            {categories.map((cat) => (
              <li key={cat} className="border-b">
                <button
                  className="flex justify-between items-center py-2 w-full font-semibold"
                  onClick={() =>
                    setOpenCategory(openCategory === cat ? null : cat)
                  }
                >
                  {cat} <IoMdArrowDropdown />
                </button>
                {openCategory === cat && (
                  <ul className="pl-3 pb-2">
                    {subItems[cat]?.map((sub) => (
                      <li key={sub} className="py-1 text-gray-600">
                        <a href="#" className="hover:text-blue-600">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav className="hidden md:block border-b pb-2">
        <ul className="flex whitespace-nowrap px-3 py-2 overflow-visible">
          {categories.map((cat) => (
            <li
              key={cat}
              className="relative group cursor-pointer px-4 py-1  hover:bg-black hover:text-white text-md font-semibold mx-3 rounded-3xl bg-gray-200"
            >
              {cat} <IoMdArrowDropdown className="inline" />
              <ul
                className="absolute left-0 top-full hidden group-hover:block 
                            bg-white border rounded shadow-md w-40 z-50 text-black"
              >
                {subItems[cat]?.map((sub) => (
                  <li
                    key={sub}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <a href="#">{sub}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
