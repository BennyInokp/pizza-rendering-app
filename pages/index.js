
import React from 'react';
import Image from 'next/image';


const Home = () => {
  return (
    <div className="mx-10 mt-[12rem]">
      <div className="relative grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2">
        <div className="relative">
        <p className='font-bold text-[60px]'>
     Handmade, 
     </p> 
     <p className='font-bold text-[60px]'>
     With an Extra
     </p>
     <p className='font-bold text-[60px]'> 
     Pinch of <span className='text-red-700 font-bold text-[60px]'>Love</span> 
     </p>
     <p className='text-[28px]'>Lorem Ipsum is simply dommy text of the</p>
         <p className='text-[28px]'>  printing and typesetting industry.</p>
          <button className="flex w-40 h-10 gap-2 mt-10 text-white bg-yellow-400 rounded-full">
          <Image
                     src="/whitecart.png"
                     alt="cart"
                    className='w-10 h-12 '
                     width={10}
                    height={7}
                     priority
                   />
           <p className='mt-2'> ORDER NOW</p>
          </button>
        </div>
        <div className="relative w-1/2 h-full ml-auto mr-0">
          <div className="absolute bottom-0 left-0 w-[28rem] h-[40rem] bg-yellow-500 rounded-tl-full rounded-bl-full mt-[2rem]"></div>
          <div>
            <img

              src="/images/pizza1.png"
              alt="pizza"
              className="relative z-10 w-full h-full"
              style={{ width: "16rem", height: "16rem", marginLeft: "-100px " }}
            />
            <img
              src="/images/onion.png"
              alt="pizza"
              className="relative z-10 w-full h-full"
              style={{ width: "6rem", height: "6rem", marginLeft: "-400px" }}
            />
            <img
              src="/images/pizza4.png"
              alt="pizza"
              className="relative z-10 w-full h-full mt-[7rem]"
              style={{ width: "12rem", height: "12rem", marginLeft: "-10px" }}
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="p-4 text-center">
          <img
            src="/images/pizza5.png"
            alt="pizza"
            className="w-full h-full "
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <div className="p-6  mr-[2rem] mt-6">
        <p className='font-bold text-[20px]'>Daily fresh and <br></br>always tasty</p>
 <p className='mt-4'>There are many variations of passages of <br></br> Lorem ipsum available, but the majority<br></br> </p>
 <p className='mr-[14rem]'>heaved</p>
        </div>
        <div className="p-2 text-center mr-[10rem]">
        <Image
                    src="/garlic.png"
                    alt="garlic"
                    className='h-[5rem]  w-[5rem] mt-[6rem] mr-[10rem]'
                    width={200}
                    height={7}
                    priority
                  />
        </div>
      </div>
      <div>
      <p className='mt-16 font-semibold text-red-500'>Popular Dishes</p>
         <p className='font-bold text-[22px]'>Browse our Menu</p>
        

             <div className='flex gap-[2rem]  '> 
      
                 <span  className='  bg-white rounded-md border border-3 w-[40%] h-[28rem]'> 
               <Image
                     src="/bread1.png"
                       alt="pizza"
                       className=' -ml-[20px] -mb-[12] '
                       width={280}
                       height={13}
                       priority
                    />
                    
                      <span className='flex gap-32'>
                    <p className='text-[16px] font-bold'>Burger pizza</p>
                    <p className=' text-[12px] mt-1 text-red-500'>$20</p>
                      </span>
      <span className='flex mt-4'>
      <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
      </span>
      <p className='text-[14px] font-semibold mt-4'>This is burger pizza</p>
      <span className='flex w-40 h-10 gap-2 mt-4 text-white bg-yellow-500 rounded-full'> 
              
              <Image
                          src="/whitecart.png"
                          alt="cart"
                          className='w-10 h-12 '
                          width={10}
                          height={7}
                          priority
                        />
              <button className='text-[14px]'>ORDER NOW</button>
              </span>
              </span>
        
              <span className= '  bg-white rounded-md border border-3  w-[40%] h-[28rem]'>
              <Image
                      src="/bread1.png"
                      alt="pizza"
                      className=' -ml-[20px] -mb-[12] '
                      width={280}
                      height={13}
                      priority
                    />
                    
                      <span className='flex gap-32'>
                    <p className='text-[16px] font-bold'>Burger pizza</p>
                    <p className=' text-[12px] mt-1 text-red-500'>$20</p>
                      </span>
      <span className='flex mt-4'>
      <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
      </span>
      <p className='text-[14px] font-semibold mt-4'>This is burger pizza</p>
      <span className='flex w-40 h-10 gap-2 mt-4 text-white bg-yellow-500 rounded-full'> 
              
              <Image
                          src="/whitecart.png"
                          alt="cart"
                          className='w-10 h-12 '
                          width={10}
                          height={7}
                          priority
                        />
              <button className='text-[14px]'>ORDER NOW</button>
              </span>
              </span>
      
              <span className='  bg-white h-[28rem] w-[40%] border border-3 rounded-md' >
        
              <Image
                      src="/pizza1.png"
                      alt="pizza"
                      className=''
                      width={220}
                      height={13}
                      priority
                    />
                    
                      <span className='flex gap-32 mt-8'>
                    <p className='text-[16px] font-bold '>New pizza</p>
                    <p className=' text-[12px] mt-1.5 text-red-500'>$10</p>
                      </span>
      <span className='flex mt-4'>
      <Image
                          src="/star.png"
                          alt="cart"
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
      </span>
      <p className='text-[14px] font-semibold mt-4'>This is a new pizza</p>
      <span className='flex w-40 h-10 gap-2 mt-4 text-white bg-yellow-500 rounded-full'> 
              
              <Image
                          src="/whitecart.png"
                          alt="cart"
                          className='w-10 h-12 '
                          width={10}
                          height={7}
                          priority
                        />
              <button className='text-[14px]'>ORDER NOW</button>
              </span>
              </span>
            
              </div>
              
              <div className='  bg-white h-[28rem] w-[32%]  border border-3 rounded-md mt-10' >
        
              <Image
                      src="/pizza1.png"
                      alt="pizza"
                      className=''
                      width={220}
                      height={13}
                      priority
                    />
                    
                      <span className='flex gap-32 mt-8'>
                    <p className='text-[16px] font-bold '>New pizza</p>
                    <p className=' text-[12px] mt-1.5 text-red-500'>$10</p>
                      </span>
      <span className='flex mt-4'>
      <Image
                          src="/star.png"
                          alt="cart"
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
                        <Image
                          src="/star.png"
                          alt="cart"
                          className='w-5 h-6 '
                          width={10}
                          height={7}
                          priority
                        />
      </span>
      <p className='text-[14px] font-semibold mt-4'>This is a new pizza</p>
      <span className='flex w-40 h-10 gap-2 mt-4 text-white bg-yellow-500 rounded-full'> 
              
              <Image
                          src="/whitecart.png"
                          alt="cart"
                          className='w-10 h-12 '
                          width={10}
                          height={7}
                          priority
                        />
              <button className='text-[14px]'>ORDER NOW</button>
              </span>
              </div>
              </div>
              
                
      <div style={{ position: "relative" }}>
        <img
          src="/images/pizza3.png"
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <div className='mt-2 bg-yellow-50' >
          <p className='text-red-500  text-[18px] font-semibold'>Our Strength</p>
          <p className='text-[23px] font-semibold'>Why We Are The Best?</p>

          <div
            className="flex"
            style={{ paddingRight: "10px", paddingLeft: "10px" }}
          >
            <div className=" flex  mt-8 gap-[12rem]">
                        
              <span>
              <Image
                     src="/foods.png"
                    alt="fresh"
                     className=''
                     width={30}
                     height={7}
                    priority
                  />

              <p className='mt-3 font-semibold'>All Kinds of foods</p>
             <p className='mt-3'>Lorem Ipsum is simply dommy text of the</p>
        <p> printing and typesetting industry</p>
              </span>
              
                  <span>
                  <Image
                     src="/fresh.png"
                    alt="fresh"
                     className=''
                     width={30}
                     height={7}
                    priority
                  />
              <p className='mt-3 font-semibold'>All Kinds of foods</p>
             <p className='mt-3'>Lorem Ipsum is simply dommy text of the</p>
        <p> printing and typesetting industry</p>
              </span>
               <span>
               <Image
                     src="/best.png"
                    alt="fresh"
                     className=''
                     width={30}
                     height={7}
                    priority
                  />
                
              <p className='mt-3 font-semibold'>All Kinds of foods</p>
             <p className='mt-3'>Lorem Ipsum is simply dommy text of the</p>
        <p> printing and typesetting industry</p>
              </span>
               <span>
               <Image
                     src="/ontime.png"
                    alt="fresh"
                     className=''
                     width={30}
                     height={7}
                    priority
                  />
                  
              <p className='mt-3 font-semibold'>All Kinds of foods</p>
             <p className='mt-3'>Lorem Ipsum is simply dommy text of the</p>
        <p> printing and typesetting industry</p>
              </span>
               
            </div>
          </div>
        </div>

        <div className='mt-10'>
        <Image
                   src="/leaf.png"
                    alt="leaf"
                    className=''
                    width={200}
                     height={7}
                     priority
                  />
           <p className='font-semibold text-red-500'>Customers Feedback</p>
                 <p className='font-bold text-[26px]'>Client Testimonials</p>

          <div className="flex">
            <div className="flex-1 text-center">
              <div className="p-4 mb-4 mr-4 border rounded-lg">
              <Image
                    src="/client5.jpg"
                     alt="client"
                     className='mt-5 rounded-full ml-[10.2rem]'
                     width={75}
                     height={7}
                     priority
                   /> 
                <p className='font-semibold text-[15px] mt-3'>Taker Bowa</p>
                  <p>Lorem Ipsum is simply</p>
                  <p>dummy text of print</p>
                   <p>book. it has survived not</p>
                 <p>only five centuries, but also</p>
                  <p> the leap</p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="p-4 mb-4 mr-4 border rounded-lg">
              <Image
                    src="/client2.jpg"
                     alt="client"
                     className='mt-5 rounded-full ml-[10.2rem]'
                     width={75}
                     height={7}
                     priority
                   /> 
               <p className='font-semibold text-[15px] mt-3'>Taker Bowa</p>
                  <p>Lorem Ipsum is simply</p>
                  <p>dummy text of print</p>
                   <p>book. it has survived not</p>
                 <p>only five centuries, but also</p>
                  <p> the leap</p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="p-4 mb-4 mr-4 border rounded-lg">
              <Image
                    src="/client3.jpg"
                     alt="client"
                     className='mt-5 rounded-full ml-[10.2rem]'
                     width={75}
                     height={7}
                     priority
                   /> 
               <p className='font-semibold text-[15px] mt-3'>Taker Bowa</p>
                  <p>Lorem Ipsum is simply</p>
                  <p>dummy text of print</p>
                   <p>book. it has survived not</p>
                 <p>only five centuries, but also</p>
                  <p> the leap</p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="p-4 mb-4 border rounded-lg">
              <Image
                    src="/client4.jpg"
                     alt="client"
                     className='mt-5 rounded-full ml-[10.2rem]'
                     width={75}
                     height={7}
                     priority
                   /> 
                <p className='font-semibold text-[15px] mt-3'>Taker Bowa</p>
                  <p>Lorem Ipsum is simply</p>
                  <p>dummy text of print</p>
                   <p>book. it has survived not</p>
                 <p>only five centuries, but also</p>
                  <p> the leap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;

