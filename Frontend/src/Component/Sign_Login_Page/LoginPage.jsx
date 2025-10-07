import React from "react";
import Login from "../../assets/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import axiosInstance from "../Api/AxiosConfig";
function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/api/login", formData)
      .then((res) => {
        console.log("login Successfully", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
        window.location.reload();
      })
      .catch((err) => alert("Wrong Password Please Try Again"));
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex justify-between items-center p-4 bg-white shadow-md my-6">
        <button className="font-semibold flex cursor-pointer">
          <FaAngleLeft size={29} onClick={() => navigate(-1)} />
          <span>Back</span>
        </button>
        <button className="font-semibold">
          <IoShareSocialOutline size={28} />
        </button>
      </div>

      <div className=" max-w-4xl w-full flex flex-col md:flex-row    overflow-hidden">
        <div className="md:w-1/2 flex flex-col ">
          <h2 className="text-2xl font-semibold pt-3 px-2 text-start">
            Welcome Back
          </h2>
          <p className="text-start px-2 text-gray-500">
            Login in to your Account
          </p>
          <img
            src={Login}
            alt="Login Illustration"
            className="w-100 h-auto  object-contain m-auto"
          />
          <p className="text-sm text-gray-500 pb-3">
            First Time Here ?{" "}
            <span className="text-blue-500 cursor-pointer">
              <Link to="/Sign">Sign Up</Link>
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 p-8 flex flex-col  ">
          <label htmlFor="emails" className="text-start font-semibold text-md">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="emails"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            className="border p-2 rounded-md w-full focus:outline-amber-400"
          />
          <label
            htmlFor="pass"
            className="text-start font-semibold text-md mt-3"
          >
            Password
          </label>
          <input
            type="password"
            id="pass"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter Your Password"
            className="border p-2 rounded-md w-full focus:outline-amber-400"
          />
          <br />
          <button className="bg-black text-white p-2 mb-2 rounded-md font-semibold hover:bg-blue-950 transition cursor-pointer">
            Login
          </button>

          <h2 className="font-semibold text-cyan-900 px-4">OR</h2>

          <button
            type="button"
            className="p-2 my-4 border-2 rounded-md font-semibold hover:bg-dark transition cursor-pointer"
          >
            Login With Google
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-950 transition cursor-pointer"
          >
            Login With Facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
