import React from "react";

const ProductsTable = () => {
  const products = [
    {
      id: 1,
      name: "Pizza",
      price: 20,
      quantity: 10,
      category: "pizza",
    },
   
  ];

  const handleEdit = (productId) => {
    console.log(`Editing product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: 0,
          width: "80%",
          padding: "16px",
        }}
      >
        <thead>
          <tr>
            <th className="pr-6">Image</th>
            <th className="pr-6">ID</th>
            <th className="pr-6">Title</th>
            <th className="pr-6">Price</th>
            <th className="pr-6">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "none" }}>
                <img
                  src="/images/bread1.jpg"
                  style={{ width: "50px", height: "50px" }}
                />
                
              </td>
              <td style={{ border: "none" }}>{product.id}</td>
              <td style={{ border: "none", whiteSpace: "nowrap" }}>
                {product.name}
              </td>
              <td className="mr-2" style={{ border: "none" }}>${product.price.toFixed(2)}</td>
              <td style={{ border: "none", whiteSpace: "nowrap" }}>
                <button className="mr-[0.5rem] bg-green-700 text-white ml-2"
                  onClick={() => handleEdit(product.id)}
                 
                >
                  Edit
                </button>
                <button className="text-white bg-red-500"
                  onClick={() => handleDelete(product.id)}
                  
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;