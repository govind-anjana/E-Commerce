import React from 'react'

function Addressform({formData,handleChange}) {
  // console.log(formData)
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={formData.address}
                placeholder="Enter Type Address"
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                  name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                  name="house"
                onChange={handleChange}
                value={formData.house}
                placeholder="House / Building"
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Street / Area"
                  name="area"
                onChange={handleChange}
                value={formData.area}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Landmark (optional)"
                  name="landmark"
                onChange={handleChange}
                value={formData.landmark}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="City"
                  name="city"
                onChange={handleChange}
                value={formData.city}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="State"
                  name="state"
                onChange={handleChange}
                value={formData.state}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <select className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"   name="work"
                onChange={handleChange}
                value={formData.work}>
                <option>Home</option>
                <option>Office</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="Pincode"
                  name="pincode"
                onChange={handleChange}
                value={formData.pincode}
                className="border border-gray-300 rounded w-full px-3 py-2  text-sm  focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent transition-all duration-200"
              />
            </div>
            
           
  )
}

export default Addressform