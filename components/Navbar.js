import React, { useState } from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import '../src/app/globals.css';
import Link from 'next/link';



export default function NavbarPage() {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the form from submitting and page refresh
   
    // Reset the search query after submitting
    setSearchQuery('');
  };

  return (
    <main className='flex h-[10%]'> 
      <div className='flex px-[2rem] gap-[10.9rem] fixed top-0 '>  
        <div>
          <Image
            src="/pizzon.png"
            alt="pizzon"
            className='h-[9rem] mt-3'
            width={200}
            height={70}
            priority
          />
        </div>

        <div>
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
            <li> <Link href='/home'>
            <span> HOME</span>
            </Link>
</li>
            <li> <Link href='/product'>
            <span> PRODUCTS</span>
            </Link>
</li>  
            <li> <Link href='/contact'>
            <span> CONTACT</span>
            </Link>
</li>
            <li> <Link href='/blog'>
            <span> BLOG</span>
            </Link>
</li>
          </ul>
        </div>
        
       

       
        <div className='flex gap-2 mt-14'>
          {/* Form for search */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-2 py-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <CiSearch className="absolute text-gray-400 top-3 right-3" />
            </div>
          </form>
       
          <Image
            src="/cart.png"
            alt="cart"
            className='w-5 h-5'
            width={200}
            height={100}
            priority
          />
        </div>
      </div>  
    </main>
  )
}
