import React from 'react'
import Deal from '../../assets/Deals.png';
import { FaArrowRightLong , FaGooglePlay,FaApple} from "react-icons/fa6";
function Footer() {
  const Tag=["Game","iPhone","TV","Asus Laptops","Macbook","SSD","Graphics card","Power bank","Smart TV","Speaker","Tablet","Microwave","Samsung"];
  return (
    <div className='bg-black py-5 flex justify-center gap-8 flex-wrap'>
        <div className='border-3'><div className='flex'><img src={Deal} className='w-9 h-9 mx-2'/><span className='text-2xl font-semibold text-white'>UNITED DEAL</span></div>
        <div className='text-start p-1 text-white'>
         <p className='text-md text-gray-400'>Customer Supports:</p>
        <p>(629) 555-0129</p>
        <p className='text-md text-gray-400 my-2 text-base/5'>4517 Washington Ave. <br/>
        Manchester, Kentucky 39483</p>
        <p >info@kinbo.com</p></div>
        </div>
        <div className='text-white text-start'><p className='font-semibold text-md'>TOP CATEGORY</p>
        <ul className='text-gray-400 text-base/7'>
          <li>Computer & Laptop</li>
          <li>SmartPhone</li>
          <li>HeadPhone</li>
        </ul>
        <p className='text-center font-semibold'>Accessories</p>
        <ul className=' text-gray-400 text-base/7'>
          <li>Camera & Photo</li>
          <li>TV & Homes</li>
        </ul>
        <p className='text-amber-400 font-semibold font-sm '>Browse All Product <FaArrowRightLong className='inline'/> </p></div>
      <div className='text-white text-start'><p className='font-semibold text-md'>QUICK LINKS</p>
        <ul className='text-gray-400 text-base/7'>
          <li>Shop Product</li>
          <li>Shoping Cart</li>
          <li>Wishlist</li>
          <li>Compare</li>
          <li>Track Order</li>
          <li>Customer Help</li>
          <li>About Us</li>
        </ul>
        </div>
         <div className='text-white text-start'><p className='font-semibold text-md'>DOWNLOAD APP</p>
         <div className='bg-gray-500 p-2 flex items-center gap-3 my-3 rounded'>
          <FaGooglePlay size={28}/>
          <div><p className='text-sm'>Get it now</p><h4 className='font-semibold'>Google Play</h4></div>
         </div>
         <div className='bg-gray-500 p-2 flex items-center gap-3 rounded'>
         <FaApple size={28}/>
          <div><p className='text-sm '>Get it now</p><h4 className='font-semibold'>App Store</h4></div>
         </div></div>
         <div className='text-white text-start p-4'><p className='font-semibold text-md'>POPULAR TAG</p>
         <div className='md:w-50'>
         {Tag.map(e=><button key={e} className='text-xs px-2 pb-1 m-1 rounded border border-gray-500'>{e}</button>)}
         </div>
          </div>
    </div>
  )
}

export default Footer
