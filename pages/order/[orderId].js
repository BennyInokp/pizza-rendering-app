import React, { useEffect, useState } from 'react';
import OrderDetails from '../OrderDetails';
import Script from 'next/script';
import { useCart } from '../../components/CartContext';
import { FaMoneyBill} from 'react-icons/fa';
import Image from 'next/image';

const OrderDetailsPage = ({ isOrderPaid }) => {
  const cart = useCart();
  const { state } = cart || {};
  const orderDetails = state?.orderDetails || {};
  const cartDetails = state?.cart || [];

  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedSubtotal = cartDetails.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
    const calculatedDiscount = 0; 
    const calculatedTotal = calculatedSubtotal - calculatedDiscount;

    setSubtotal(calculatedSubtotal);
    setDiscount(calculatedDiscount);
    setTotal(calculatedTotal);
  }, [cartDetails]);

  const renderPaidOrder = () => {
    return <></>; 
  };

  return (
    <div className="flex flex-col items-center mt-40 ">
      <div className=''> 
      {isOrderPaid ? (
        renderPaidOrder()
      ) : (
        <>
          <div className="flex mx-auto">
           
            <div className="flex-1">
              <OrderDetails  />
            </div>

          
            <div className=' text-lg h-[12rem] w-[15rem] text- bg- mt-[rem] ml-[14rem] '>
            <div className='h-[12rem] w-[15rem] text-white bg-black ml-8'>
              <h2 className='mt-[15rem]'>CART TOTAL</h2>
              <div>
                <p>Subtotal: ${subtotal.toLocaleString()}</p>
                <p>Discount: ${discount.toLocaleString()}</p>
                <p>Total: ${total.toLocaleString()}</p>
              </div>
              <button className='h-8 mt-6 text-white bg-yellow-500 rounded-full w-52' >Paid</button>
            </div>
 </div>
          
            <Script src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`} strategy="beforeInteractive" />
            <div id="paypal-button-container"></div>
          </div>
          <div className="m-[rem] gap-6 flex ml-[5.6rem]">
            <div className="mt-[1.9rem]">
              <FaMoneyBill className="w-8 h-12 " />
              <p>Payment</p>
            </div>
           
            
            <div>
            <Image
                    src="/preparing.png"
                     alt="client"
                     className='mt-5 rounded-full '
                     width={50}
                     height={7}
                     priority
                   /> 
             <p className='mt-2'>Preparing</p>
            </div>

            
            <div>
            <Image
                    src="/bike-delivery.png"
                     alt="client"
                     className='mt-5 rounded-full '
                     width={50}
                     height={7}
                     priority
                   /> 
             <p className='mt-2'>On the Way</p>
            </div>
           
            <div>
            <Image
                    src="/bike-delivery.png"
                     alt="client"
                     className='mt-5 rounded-full '
                     width={50}
                     height={7}
                     priority
                   /> 
              <p className='mt-2'>delivered</p>
            </div>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
