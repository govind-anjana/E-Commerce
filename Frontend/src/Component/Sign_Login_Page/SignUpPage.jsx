import React from "react";
import Login from "../../assets/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import axiosInstance from "../Api/AxiosConfig";
function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();

    axiosInstance
      .post("/api/signup", formData)
      .then((res) => {
        alert("Successfully User Sign Up Please Login Again");
        navigate("/Login");
      })
      .catch((err) => {
        console.error("Error:", err.response ? err.response.data : err.message);
      });
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex justify-between items-center p-4 bg-white shadow-md my-6">
        <button className="font-semibold flex">
          <FaAngleLeft size={29} />
          <span>Back</span>
        </button>
        <button className="font-semibold">
          <IoShareSocialOutline size={28} />
        </button>
      </div>

      <div className=" max-w-4xl w-full flex flex-col md:flex-row    overflow-hidden">
        <div className="md:w-1/2  flex flex-col ">
          <h2 className="text-2xl font-semibold pt-3 px-2 text-start">
            Create an account
          </h2>
          <p className="text-start px-2 text-gray-500">
            Let's create your account
          </p>
          <img
            src={Login}
            alt="Login Illustration"
            className="w-100 h-auto object-contain m-auto"
          />
          <p className="text-sm text-gray-500 my-3">
            Already a member ?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to="/login">Login In</Link>
            </span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 px-4 pt-3 flex flex-col justify-center "
        >
          <label
            htmlFor="name"
            className="text-start font-semibold text-md py-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Full Name"
            className="border p-2 rounded-md w-full focus:outline-amber-400"
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="text-start font-semibold text-md mt-3 py-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
            className="border p-2 rounded-md w-full focus:outline-amber-400"
            onChange={handleChange}
          />
          <label
            htmlFor="pass"
            className="text-start font-semibold text-md mt-3 py-1"
          >
            Password
          </label>
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="Enter Your Password"
            className="border p-2 rounded-md w-full focus:outline-amber-400"
            onChange={handleChange}
          />
          <br />
          <button className="bg-black text-white p-2 mb-2 rounded-md font-semibold hover:bg-blue-950 transition cursor-pointer">
            Sign Up
          </button>

          <h2 className="font-semibold text-cyan-900 ">OR</h2>

          <button
            type="button"
            className="p-2 my-4 border-2 rounded-md font-semibold hover:bg-dark transition cursor-pointer"
          >
            Login With Google
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 mb-2 rounded-md font-semibold hover:bg-blue-950 transition  cursor-pointer"
          >
            Login With Facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
