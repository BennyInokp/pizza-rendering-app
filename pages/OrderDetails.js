import React from "react";

const OrderDetails = ({ orderId, customer, address, total, cartDetails }) => {
  console.log("cartDetails:", cartDetails); 
  return (
    <div className="mt-60 px-[4rem] mr-10">
      <h2>Order Details</h2>
      <table style={{ borderCollapse: "separate", borderSpacing: "0 rem" }}>
        <thead>
          <tr>
            <th className="pr-16">Order ID</th>
            <th className="pr-8">Customer</th>
            <th className="pr-8">Address</th>
            <th className="pr-8">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pr-16">123{orderId}</td>
            <td className="pr-8">Benedicta{customer}</td>
            <td className="pr-8">Benin City{address}</td>
            <td className="pr-8">$20{total && total.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <table style={{ borderCollapse: "separate", borderSpacing: "0 rem" }}>
        <tbody>
          {cartDetails && Array.isArray(cartDetails) && cartDetails.map((item, index) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;


