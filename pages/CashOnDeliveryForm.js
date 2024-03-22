import React, { useState } from "react";
import { useRouter } from "next/router";

const CashOnDeliveryForm = ({
  total,
  onSubmit,
  onCancel,
  updateCartTotals,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("onDelivery");
  const [Fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paypalAccount, setPaypalAccount] = useState(""); 
  const [orderId, setOrderId] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!Fullname.trim() || !phoneNumber.trim() || !address.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    const paymentDetails = {
      orderId: newOrderId,
      Fullname,
      phoneNumber,
      address,
      total: total,
      paymentMethod: paymentMethod === "onDelivery" ? "onDelivery" : "paypal",
      paypalAccount: paymentMethod === "onDelivery" ? null : paypalAccount,
    };

    // onSubmit(paymentDetails);

    console.log("Redirecting to:", `/order/${newOrderId}`);

    await router.push(`/order/${newOrderId}`);
  };

  const generateOrderId = () => {
    return Math.floor(Math.random() * 100000).toString();
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-50 cash-on-delivery-form-overlay">
      <div className="p-8 bg-white rounded-lg shadow-md loginContainer ">
        <h2 className="mb-4 text-2xl font-bold">
          You will pay ${total !== undefined ? total.toLocaleString() : "$0"}{" "}
          {paymentMethod === "onDelivery" ? "on delivery" : "via PayPal"}
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mb-2">Fullname:</label>
          <input
            type="text"
            value={Fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="px-4 py-2 mb-4 border border-gray-300 rounded"
          />

          <label className="mb-2">Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-2 mb-4 border border-gray-300 rounded"
          />

          <label className="mb-2">Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-4 py-2 mb-4 border border-gray-300 rounded"
          />

          <label className="mb-2">Payment Method:</label>
          <div className="mb-4">
            <label className="mr-4">
              <input
                type="radio"
                value="onDelivery"
                checked={paymentMethod === "onDelivery"}
                onChange={() => setPaymentMethod("onDelivery")}
              />
              Pay on Delivery
            </label>
            <label>
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>

          {paymentMethod === "paypal" && (
            <div>
              <label className="mb-2">PayPal Account:</label>
              <input
                type="text"
                value={paypalAccount}
                onChange={(e) => setPaypalAccount(e.target.value)}
                className="px-4 py-2 mb-4 border border-gray-300 rounded"
              />
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-500 button hover:bg-yellow-400"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CashOnDeliveryForm;
