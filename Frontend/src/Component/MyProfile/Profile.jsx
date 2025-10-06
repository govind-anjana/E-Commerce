import React, { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import Address from "../../assets/Address.png";
import { FaAngleLeft } from "react-icons/fa6";
import Profiles from "../../assets/Profile.png";
import My from "../../assets/Myaccount.png";
import Jacket from "../../assets/Jacket.png";
import Order from "../../assets/Order.png";
import Logout from "../../assets/Logout.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AddressmainPage from "./AddressmainPage";
function Profile() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};
  const [active, setActive] = useState(1);
  const [userName, setUserName] = useState("");
  const [Oactive, setOactive] = useState("Items");
  const [showOrder, setShowOrder] = useState(true);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });
    
  useEffect(() => {
    if (user) {
      setUserName(user.name);
      setFormData({
        name: user.name || "",
        email: user.email || "",
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      });
    }
  }, [user]);
  useEffect(() => {
    if (active == 4) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    }
  }, [active]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const menus = [
    {
      id: 1,
      title: "MY ACCOUNT",
      img: My,
      bg: "bg-blue-200",
      border: "border-white",
    },
    {
      id: 2,
      title: "ORDER HISTORY",
      img: Order,
      bg: "bg-orange-100",
      border: "border-orange-100",
    },
    {
      id: 3,
      title: "ADDRESS",
      img: Address,
      bg: "bg-green-100",
      border: "bg-green-100",
    },
    {
      id: 4,
      title: "LOGOUT",
      img: Logout,
      bg: "bg-pink-100",
      border: "border-pink-100",
    },
  ];
   
  const OrderData = [
    {
      id: "#3456_568",
      date: "October 17,25",
      status: "Delivered",
      price: "$120.00",
    },
    {
      id: "#3467_309",
      date: "October 11,25",
      status: "Delivered",
      price: "$80.00",
    },
    {
      id: "#3467_185",
      date: "August 24,25",
      status: "Delivered",
      price: "$1500.00",
    },
    {
      id: "#3467_025",
      date: "August 12,25",
      status: "Delivered",
      price: "$150.00",
    },
  ];
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const updateData = {
      name: formData.name,
      email: formData.email,
    };
    if (formData.newPassword) {
      updateData.oldPassword = formData.oldPassword;
      updateData.newPassword = formData.newPassword;
    }
    // console.log(formData);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:4000/api/updateuser/${id}`,
        updateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Profile updated successfully!");
      console.log(res.data);
      navigate("/");
      setFormData({
        ...formData,
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      });
    } catch (err) {
      console.error(err);
      alert("Old Password Are Not Match");
    }
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.newPassword || formData.repeatPassword) {
      if (!formData.oldPassword) {
        tempErrors.oldPassword = "Old password is required to change password";
      }
      if (formData.newPassword.length < 6) {
        tempErrors.newPassword = "New password must be at least 6 characters";
      }
      if (formData.newPassword !== formData.repeatPassword) {
        tempErrors.repeatPassword = "Passwords do not match";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-4xl flex justify-between items-center p-4 bg-white shadow-md my-6 rounded-lg">
        <button
          className="font-semibold flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft size={22} />
          <span>Back</span>
        </button>
        <button className="font-semibold text-gray-700 hover:text-black">
          <IoShareSocialOutline size={24} />
        </button>
      </div>

      <div className="w-full max-w-4xl py-2 flex flex-col md:flex-row gap-1">
        <div className="mx-4 flex-1">
          <h2 className="font-bold text-start text-4xl text-gray-800 mb-4 mx-2">
            My Profile
          </h2>

          <div className="shadow rounded-2xl flex flex-col items-center md:items-center py-2  md:p-3 ">
            <img
              src={Profiles}
              alt="Profile"
              className="w-36 h-36 rounded-full  object-cover"
            />

            <h4 className="text-xl font-semibold mt-1 uppercase border-b w-50 pb-4">
              {userName}
            </h4>

            <div className="grid grid-cols-2 gap-3 mt-3 w-full">
              {menus.map((menu) => (
                <div
                  key={menu.id}
                  onClick={() => {
                    setActive(menu.id);
                    setShowOrder(true);
                  }}
                  className={`flex flex-col  items-center rounded-lg  cursor-pointer  transition ${
                    menu.bg
                  }  
                  ${
                    active === menu.id
                      ? "border-2 border-blue-500 bg-white"
                      : "border-2 border-transparent "
                  }
                  `}
                >
                  <img
                    src={menu.img}
                    alt={menu.title}
                    className="w-24 h-24 mb-2"
                  />
                  <h4 className={`font-bold text-sm p-1`}>{menu.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-500 my-4">
            Dont's have an account ?{" "}
            <Link to="/login" className="font-semibold text-blue-500 underline">
              Login
            </Link>
          </p>
        </div>

        {active == 1 && (
          <div className="flex-2 text-start py-1">
            <h3 className="font-semibold text-xl flex text-gray-900 mb-3">
              <img src={My} className="w-8 mr-2" /> Account Details
            </h3>
            <form onSubmit={handleUpdate} className="space-y-3 text-gray-600">
              <div className="mt-2">
                <label className="font-bold text-sm">FIRST NAME * </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border py-1 px-2  font-semibold mt-1 rounded-md w-full focus:outline-black"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="mt-2">
                <label className="font-bold text-sm ">EMAIL * </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="border py-1 px-2 font-semibold mt-1 rounded-md w-full focus:outline-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <h3 className="font-semibold text-lg text-black py-2">
                Password
              </h3>
              <div className="mt-1">
                <label htmlFor="old" className="font-bold text-sm ">
                  OLD PASSWORD *{" "}
                </label>
                <br />
                <input
                  type="password"
                  id="old"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  placeholder="Old password"
                  className="border py-1 px-2 font-semibold mt-1 rounded-md w-full focus:outline-black"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="new" className="font-bold text-sm ">
                  NEW PASSWORD *{" "}
                </label>
                <br />
                <input
                  type="password"
                  id="new"
                  name="newPassword"
                  onChange={handleChange}
                  placeholder="New password"
                  value={formData.newPassword}
                  className="border py-1 px-2 font-semibold mt-1 rounded-md w-full focus:outline-black"
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm">{errors.newPassword}</p>
                )}
              </div>
              <div className="mt-2">
                <label htmlFor="repeat" className="font-bold text-sm ">
                  REPEAT NEW PASSWORD *{" "}
                </label>
                <br />
                <input
                  type="password"
                  id="repeat"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  placeholder="Repeat new password"
                  className="border py-1 px-2 font-semibold mt-1 rounded-md w-full focus:outline-black"
                />
                {errors.repeatPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.repeatPassword}
                  </p>
                )}
              </div>
              <button className="mt-2 px-5  text-sm font-semibold bg-black py-2 rounded text-white cursor-pointer">
                Save Changes
              </button>
            </form>
          </div>
        )}
        {active == 2 &&
          (showOrder ? (
            <div className="flex-2 text-start py-2">
              <h3 className="font-semibold text-xl flex items-center text-gray-900 my-3">
                <img src={Order} className="w-10 mr-2" />
                Order History
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="font-semibold text-base text-gray-700">
                    <tr className="border-b  border-gray-300 shadow">
                      <th className="px-4 py-3 ">Order ID</th>
                      <th className="px-4 py-3 ">Date</th>
                      <th className="px-4 py-3 ">Status</th>
                      <th className="px-4 py-3 ">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OrderData.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-300 shadow font-medium"
                      >
                        <td className="px-4 py-3 ">{order.id}</td>
                        <td className="px-4 py-3 ">{order.date}</td>
                        <td className={`px-4 py-3 font-medium `}>
                          {order.status}
                        </td>
                        <td className="px-4 py-3">{order.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                className="px-4 py-2  my-4 rounded-xl text-white bg-blue-500 font-medium cursor-pointer"
                onClick={() => setShowOrder(false)}
              >
                What to enquire about your order ?
              </button>
            </div>
          ) : (
            <div className="flex-2 text-start py-2 mt-9">
              <div className="bg-gray-300 rounded flex justify-between font-semibold p-2">
                <button
                  className={`px-4 py-2 rounded cursor-pointer ${
                    Oactive == "Items"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setOactive("Items")}
                >
                  Item Orderrd
                </button>
                <button
                  className={`px-4 py-2 rounded cursor-pointer ${
                    Oactive == "Invoice"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setOactive("Invoice")}
                >
                  Invoice
                </button>
                <button
                  className={`px-4 py-2 rounded cursor-pointer ${
                    Oactive == "Shipment"
                      ? "bg-blue-500 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => setOactive("Shipment")}
                >
                  Order Shipment
                </button>
              </div>
              <table className="w-full text-left text-sm my-5">
                <thead className="font-semibold  text-gray-500">
                  <tr className="border-b  border-gray-400 ">
                    <th className="py-2 px-3">Product Name</th>
                    <th className="py-2 px-3">Price</th>
                    <th className="py-2 px-3">Qty</th>
                    <th className="py-2 px-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-semibold">
                    <td className="py-2 px-3 flex">
                      <img src={Jacket} className="w-15 h-15 mr-2" />
                      <p className="text-base font-semibold">
                        Lacket
                        <br />
                        <span className="text-gray-500 font-normal">COAT</span>
                      </p>
                    </td>
                    <td className="py-2 px-3">$54.69</td>
                    <td className="py-2 px-3">2</td>
                    <td className="py-2 px-3">$109.38</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-lg font-semibold py-2 border-b border-gray-400">
                Order Information
              </h3>
              <div className=" p-2 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-base">
                  <h4 className="text-gray-500 font-semibold mb-1">
                    Order Details
                  </h4>
                  <div className="flex justify-between mb-1 ">
                    <span>Sub Total</span> <span>$119.69</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Discount</span> <span>- $13.40</span>
                  </div>
                  <div className="flex justify-between  mb-1">
                    <span>Delivery Fee</span> <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Grand Total</span> <span>$106.29</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-500 font-semibold mb-1">
                    Payment Details
                  </h4>
                  <p className="text-base text-gray-800">Cash on Delivery</p>
                </div>

                <div>
                  <h4 className="text-gray-500 font-semibold mb-1">
                    Address Details
                  </h4>
                  <p className="text-base text-gray-800 leading-5">
                    Vincent Lobo <br />
                    3068 Woodlawn Drive <br />
                    Milwaukee
                  </p>
                  <span className=" text-gray-500 text-lg">#3456_568</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold mr-5 hover:bg-blue-600 cursor-pointer">
                  Reorder
                </button>
                <button className="px-6 py-2 border-2 border-cyan-700 text-cyan-700 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer">
                  Add Rating
                </button>
              </div>
            </div>
          ))}

        {active == 3 && <AddressmainPage/>}

        {active == 4 && (
          <div className="flex-2 text-start py-2">
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
