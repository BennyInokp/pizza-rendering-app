import React from "react";
import ProductTable from "../components/ProductTable";
import OrderTable from "../components/OrderTable";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div style={{ marginRight: "16px", margin: "auto" }}>
        <h2 className="mt-[4rem] ml-4">Products Table</h2>
        <ProductTable />
      </div>
      <div style={{ marginLeft: "16px", margin: "auto" }}>
        <h2>Orders Table</h2>
        <OrderTable />
      </div>
    </div>
  );
};

export default Dashboard;