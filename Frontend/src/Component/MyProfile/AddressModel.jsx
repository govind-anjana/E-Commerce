import React from 'react'
import Addressform from './Addressform'

function AddressModel({show, onClose, formData, handleChange, handleSubmit}) {
  
  if(!show) return null;
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flex items-center justify-center z-50 ">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl m-2 p-4 w-[600px] shadow-lg relative">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Add New Address
            </h2>
           <Addressform formData={formData} handleChange={handleChange}/>
                 <div className="flex justify-end mt-2 space-x-2">
              <button type="button"
                onClick={onClose}
                className="px-4 py-1 rounded-md border border-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button type="submit"
                
                className="px-4 py-1 rounded-md bg-black text-white cursor-pointer"
              >
                {formData._id ? "Update":"Save"}
              </button>
            </div>
            <button
              className="absolute top-1 right-3 text-gray-500 text-3xl cursor-pointer"
              onClick={onClose}
            >
              &times;
            </button>
          </form>
        </div>
  )
}

export default AddressModel