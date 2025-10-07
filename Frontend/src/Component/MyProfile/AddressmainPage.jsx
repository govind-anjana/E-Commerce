import React, { useEffect, useState } from 'react'
import Address from "../../assets/Address.png";
import AddressCard from './AddressCard';
import { IoMdAddCircleOutline } from "react-icons/io";
import AddressModel from './AddressModel';
import axios from 'axios';
import axiosInstance from '../Api/AxiosConfig';
function AddressmainPage() {
     const [showPopup, setShowPopup] = useState(false);
     const [AddressData,setAddressData]=useState([])
     const [editingId, setEditingId] = useState(null);
     const fetchApi=async()=>{
          await axiosInstance.get("/api/address").then((res)=>setAddressData(res.data)).catch((err)=>console.error("err",err))
     }
      useEffect(() => {
        fetchApi()
        document.body.style.overflow = showPopup ? "hidden" : "auto";
      }, [showPopup]);
       const [formData, setFormData] = useState({
          address: "",
          name:"",
          phone: "",
          house: "",
          area: "",
          landmark: "",
          city: "",
          state: "",
          work:"",
          pincode: "",
            
        });
       const handleChange =(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
       }

     const handleSubmit = async (e) => {
  e.preventDefault();
  // alert(editingId)
  try {
    if (editingId) {
      await axiosInstance.put(`/api/addressupdate/${editingId}`, formData).then((res)=>console.log("Update Address",res)).catch((err)=>console.error("err",err))
    } else {
      await axiosInstance.post("/api/address", formData);
      alert("Address Saved Successfully");
    }
    setShowPopup(false);
    setEditingId(null);
    setFormData({
      address: "",
      name: "",
      phone: "",
      house: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      work: "",
      pincode: "",
    });
    fetchApi();  
  } catch (err) {
    console.error("Error:", err);
  }
};
      const handleEdit=(addItem)=>{
        setFormData(addItem);
        setShowPopup(true);
        setEditingId(addItem._id)
      }
       
  return (
         <div className="flex-2 text-start py-2">
      <h3 className="font-semibold text-xl flex text-gray-900 mb-3">
        <img src={Address} className="w-8 mr-2" />
        Address
        <IoMdAddCircleOutline
          size={25}
          className="ml-auto cursor-pointer"
          onClick={() => setShowPopup(true)}
        />
      </h3>
            <AddressModel show={showPopup} onClose={() => setShowPopup(false)} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>


      <div className="flex md:justify-between justify-center my-5 flex-wrap gap-2">
        {AddressData.map((item, index) => (
          <AddressCard key={index} item={item} onEdit={handleEdit}/>
        ))}
      </div>
    </div>                   
  )
}

export default AddressmainPage