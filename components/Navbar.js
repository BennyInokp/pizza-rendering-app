
import React from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import '../src/app/globals.css'


export default function NavbarPage() {
  return (
    
    <main className='flex h-[10%]'> 
    <div className='flex px-[7rem] gap-32 sticky top-0 '>  
    <div >
                  <Image
                    src="/pizzon.png"
                    alt="pizzon"
                    className='h-[9rem] mt-3'
                    width={200}
                    height={70}
                    priority
                  />
                </div>
    
    
    <div >
                  <Image
                    src="/red.png"
                    alt="red"
                    className='h-'
                    width={200}
                    height={100}
                    priority
                  />
                </div>
    
    <div>
        <ul className='flex mt-14 gap-14 ml-[12rem] list-none cursor-pointer text-lg font-bold'>
    <li><a href='HOME'>HOME</a></li>
    <li><a href='PRODUCTS'>PRODUCTS</a></li>  
    <li><a href='PAGES'>PAGES</a></li>
    <li><a href='BLOG'>BLOG</a></li>
    <li><a href='CONTACT'>CONTACT</a></li>
       </ul>
       </div>
       
       <div className='flex mt-14 gap-4 '>
       <h1 className='mt-1 w-5 h-5'><CiSearch /></h1>
       
       <Image
                    src="/cart.png"
                    alt="cart"
                    className='h-5 w-5'
                    width={200}
                    height={100}
                    priority
                  />
    </div>
     </div>   
     </main>
  )
}
