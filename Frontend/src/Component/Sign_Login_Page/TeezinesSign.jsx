
import React, { useState } from "react";
import axios from "axios";

const TeezinesSign = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("https://teezines.onrender.com/auth/register", formData);
      console.log(res);
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error");
    }
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("https://teezines.onrender.com/auth/verify-otp", {
        email: formData.email,
        otp,
      });
      console.log(res);
      setMessage(res.data.message);
      setStep(3);
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          {step === 1 ? "Sign Up" : step === 2 ? "Verify OTP" : "Success!"}
        </h2>
        {message && (
          <p className={`mb-4 text-center ${step === 3 ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}

        {/* Step 1: Signup Form */}
        {step === 1 && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Sign Up & Send OTP
            </button>
          </form>
        )}

        {/* Step 2: OTP Form */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter OTP sent to {formData.email}
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Verify OTP
            </button>
            <p
              className="text-center text-sm text-gray-500 mt-2 cursor-pointer hover:underline"
              onClick={handleSignup} // simple resend OTP
            >
              Resend OTP
            </p>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="text-center">
            <p className="text-green-600 font-semibold text-lg">Email verified successfully!</p>
            <p className="mt-2 text-gray-700">You can now log in to your account.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeezinesSign;
