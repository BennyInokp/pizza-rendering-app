
import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import '../src/app/globals.css'

export default function FooterPage() {
  return (
    <main className='px-[2rem] mt-14 h-[50%] bg-yellow-50 '>
    <div className='flex gap-[24rem]  bg-yellow-50 '>
      <span>
<p className='font-bold'>INFORMATION</p>
<ul>
<li className='mt-3'><a href='Home'>Home</a></li>
<li className='mt-3'><a href='Blog'>Blog</a></li>
<li className='mt-3'><a href='About'>About</a></li>
<li className='mt-3'><a href='Menu'>Menu</a></li>
<li className='mt-3'><a href='Contact Us'>Contact Us</a></li>

</ul>
      </span>
      <span>
        <p className='font-bold'>TOP ITEMS</p>
        <ul>
        <li className='mt-3'><a href='Peperoni'>Peperoni</a></li>
        <li className='mt-3'><a href='Swiss Mushroom'>Swiss Mushroom</a></li>
        <li className='mt-3'><a href='Barbeque Chicken'>Barbeque Chicken</a></li>
        <li className='mt-3'><a href='Vegetarian'>Vegetarian</a></li>
        <li className='mt-3'><a href='Ham and Cheese'>Ham and Cheese</a></li>
</ul>
      </span>
      <span>
        <p className='font-bold'>OTHERS</p>
        <ul>
        <li className='mt-3'><a href='Checkout'>Checkout</a></li>
        <li className='mt-3'><a href='Cart'>Cart</a></li>
        <li className='mt-3'><a href='Product'>Product</a></li>
        <li className='mt-3'><a href='Locations'>Locations</a></li>
        <li className='mt-3'><a href='Legal'>Legal</a></li>
</ul>
      </span>
      <span>
        <p className='font-bold'>SOCIAL MEDIA</p>
        <span className='flex gap-4'> 
        <FaFacebookF className='w-10 h-10 mt-8 text-white bg-blue-900'/>
        <FaPinterestP className='w-10 h-10 mt-8 text-white bg-red-700' />
                  <IoLogoTwitter className='w-10 h-10 mt-8 text-white bg-blue-600'/>
                  <CiInstagram  className='w-10 h-10 mt-8 text-white bg-red-400'/>
                  </span>
                  <p className='mt-3'>Signup and get executive offers and coupon</p>
                  <p>codes</p>
                  <button className='w-32 h-10 mt-6 text-white bg-yellow-500 rounded-full'>SIGN UP</button>
      </span>
    </div>
  </main>
)
}

  

