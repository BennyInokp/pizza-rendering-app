
// OrdersTable.js
import React from "react";
import Link from 'next/link';

const OrdersTable = () => {
  //  list of orders
  const orders = [
    // Sample order data
    {
      id: 1,
      product: "Product 1",
      quantity: 3,
      customer: "Benny Akhils",
      total: 59.97,
    },
    
  ];

  // Function to handle the next stage action
  const handleNextStage = (orderId) => {
    console.log(`Moving order with ID: ${orderId} to the next stage`);
  };

  return (
    <div className="mt-4" style={{ textAlign: "center" }}>
      <table
        style={{ borderCollapse: "collapse", width: "80%", padding: "16px" }}
      >
        <thead>
          <tr>
            <th className="pr-6">ID</th>
            <th className="pr-6">Customer</th>
            <th className="pr-6">Total</th>
            <th className="pr-6">Payment</th>
            <th className="pr-6">Status</th>
            <th className="pr-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total.toFixed(2)}</td>
              <td className="pr-6" >cash</td>
              <td>Pending</td>
              <td
                style={{
                  border: "none",
                  borderBottom:
                    index < orders.length - 1 ? "1px solid #ddd" : "none",
                }}
              >
                <Link href="/Products">
                <button className="w-20 pr-2 text-white bg-green-700 h-7"
                  onClick={() => handleNextStage(order.id)}
                                  >
                 Next Stage 
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable


