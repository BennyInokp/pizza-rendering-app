// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { pizzas } from "../products";
// import { useCart } from "../../components/CartContext";
// import { CiHeart } from "react-icons/ci";
// import Image from 'next/image';


// const ProductDetails = () => {
//   const { addToCart } = useCart();
//   const [itemCount, setItemCount] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("medium");
//   const [selectedIngredients, setSelectedIngredients] = useState({
//     sauce: false,
//   });

//   const handleItemCountChange = (amount) => {
//     const newCount = Math.max(1, itemCount + amount);
//     setItemCount(newCount);
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleIngredientChange = (ingredient) => {
//     setSelectedIngredients((prevIngredients) => ({
//       ...prevIngredients,
//       [ingredient]: !prevIngredients[ingredient],
//     }));
//   };

//   const router = useRouter();
//   const { id } = router.query;

//   if (!id) {
//     return <p>Loading...</p>;
//   }

//   const productId = String(id);
//   const product = pizzas.find((product) => String(product.id) === productId);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       ...product,
//       size: selectedSize,
//       quantity: itemCount,
//       ingredients: selectedIngredients,
//     });
//   };

//   return (
//     <div className="grid h-screen grid-cols-2 gap-20 px-[2rem] mt-60" >
      
    
//       <div>
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{ width: "100%", height: "auto" }}
//         />
//       </div>
//       <div>
//         <h1>{product.name}</h1>
//         <p style={{ fontWeight: "bold" }}> {product.price}</p>
//         <p>{product.rating} reviews</p>
//         <p>{product.description}</p>

//         <div style={{ marginTop: "20px" }}>
//           <h2>Choose Pizza Size</h2>
//           <div style={{ display: "flex", gap: "20px" }}>
//             <div>
//               <button
//                 onClick={() => handleSizeChange("small")}
//                 style={{
//                   background: "red",
//                   height: "12px",
//                   borderRadius: "10px",
//                   color: "white",
//                   fontSize: "10px",
//                 }}
//               >
//                 Small
//               </button>
//               <Image
//                 src="/Pizza-icon.png"
//                 alt="Pizza"
//                 className='w-8 h-8 '
//                 width={10}
//                 height={7}
//                 priority
//               />
//             </div>
//             <div>
//               <button
//                 onClick={() => handleSizeChange("medium")}
//                 style={{
//                   background: "red",
//                   height: "12px",
//                   borderRadius: "10px",
//                   color: "white",
//                   fontSize: "10px",
//                 }}
//               >
//                 Medium
//               </button>
//               <Image
//                 src="/Pizza-icon.png"
//                 alt="Pizza"
//                 className='w-10 h-10 '
//                 width={80}
//                 height={8}
//                 priority
//               />
//             </div>
//             <div>
//               <button
//                 onClick={() => handleSizeChange("large")}
//                 style={{
//                   background: "red",
//                   height: "12px",
//                   borderRadius: "10px",
//                   color: "white",
//                   fontSize: "10px",
//                 }}
//               >
//                 Large
//               </button>
//               <Image
//                 src="/Pizza-icon.png"
//                 alt="Pizza"
//                 className='w-12 h-12 '
//                 width={100}
//                 height={10}
//                 priority
//               />
//             </div>
//           </div>
//         </div>

//         <div style={{ marginTop: "20px" }}>
//           <h2>Choose Additional Ingredients</h2>
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedIngredients.sauce}
//                 onChange={() => handleIngredientChange("sauce")}
//               />
//               Sauce
//             </label>
//           </div>
//         </div>

//         <div style={{ marginTop: "20px" }}>
//           <h2>Choose Additional Ingredients</h2>

//           <div className="flex items-center gap-10 mt-7">
           
//             <div
//               className="relative inline-block "
//             >
              
//               <input
//                 type="text"
//                 value={itemCount}
//                 className="w-32 pr-2 border border-gray-400 border-solid outline-none h-9"
//                 readOnly
              
//               />

//               {/* <div
//                 className="absolute top-0 right-0 flex flex-col h-full"
//               >
//                 <button className="p-2 text-xs text-black bg-transparent border-none cursor-pointer"
//                   onClick={() => handleItemCountChange(1)}
                  
//                 >
                 
//                 </button>
                 
//                 <button className="p-2 text-xs text-black bg-transparent border-none cursor-pointer "
//                   onClick={() => handleItemCountChange(-1)}
//                   >
                  
//                 </button>
                
//               </div> */}
//               <div className="flex items-center mt-10">
//   <input
//     type="text"
//     value={itemCount}
//     className="w-16 h-10 pr-2 text-center border border-gray-400 border-solid outline-none"
//     readOnly
//   />
//   <div className="flex flex-col items-start ml-2">
//     <button
//       onClick={() => handleItemCountChange(1)}
//       className="p-2 text-xs text-black bg-transparent border-none cursor-pointer"
//     >
//       &#9650;
//     </button>
//     <button
//       onClick={() => handleItemCountChange(-1)}
//       className="p-2 text-xs text-black bg-transparent border-none cursor-pointer"
//     >
//       &#9660;
//     </button>
//   </div>
// </div>

//             </div>
//             <button onClick={handleAddToCart} className="h-10 bg-yellow-500 w-[8rem] rounded-full">
//               ADD TO CART
//             </button>
//             <div className="flex items-center w-8 pl-2 bg-white border border-gray-400 border-solid rounded-full cursor-pointer h-9 ">
//   <CiHeart className=""/> 
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




import React, { useState } from "react";
import { useRouter } from "next/router";
import { pizzas } from "../Products";
import { useCart } from "../../components/CartContext";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';


const ProductDetails = () => {
  const { addToCart } = useCart();
  const [itemCount, setItemCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedIngredients, setSelectedIngredients] = useState({
    sauce: false,
  });

  const handleItemCountChange = (amount) => {
    const newCount = Math.max(1, itemCount + amount);
    setItemCount(newCount);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prevIngredients) => ({
      ...prevIngredients,
      [ingredient]: !prevIngredients[ingredient],
    }));
  };

  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  const productId = String(id);
  const product = pizzas.find((product) => String(product.id) === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize,
      quantity: itemCount,
      ingredients: selectedIngredients,
    });
  };

  return (
    <div className="grid h-60% grid-cols-2 gap-20 px-[2rem] mt-60"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
       className="w-[60%] h-auto ml-[15rem]"
          
        />
      </div>
      <div className="mt-14">
        <h1>{product.name}</h1>
        <p style={{ fontWeight: "bold" }}> {product.price}</p>
        <p>{product.rating} reviews</p>
        <p>{product.description}</p>

        <div style={{ marginTop: "20px" }}>
          <h2>Choose Pizza Size</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <button
                onClick={() => handleSizeChange("small")}
                style={{
                  background: "red",
                  height: "12px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                Small
              </button>
              <Image
                 src="/Pizza-icon.png"
                 alt="Pizza"
                 className='w-8 h-8 '
                 width={100}
                 height={10}
                priority
              />
            </div>
            
            <div>
              <button
                onClick={() => handleSizeChange("medium")}
                style={{
                  background: "red",
                  height: "12px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                Medium
              </button>
              <Image
               src="/Pizza-icon.png"
                alt="Pizza"
                 className='w-10 h-10 '
                 width={100}
                 height={10}
                 priority
               />
            </div>
            <div>
              <button
                onClick={() => handleSizeChange("large")}
                style={{
                  background: "red",
                  height: "12px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                Large
              </button>
              <Image
                src="/Pizza-icon.png"
                alt="Pizza"
                className='w-12 h-12 '
                width={100}
                 height={10}
                priority
               />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h2>Choose Additional Ingredients</h2>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedIngredients.sauce}
                onChange={() => handleIngredientChange("sauce")}
              />
              Sauce
            </label>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h2>Choose Additional Ingredients</h2>

          <div className="flex items-center gap-5 mt-7 ">
           
            <div
              style={{
                
                position: "relative",
                display: "inline-block",
              }}
            >
              <input
                type="text"
                value={itemCount}
                className="h-8 pr-2 border border-gray-400 border-solid outline-none w-28"
                readOnly
              />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <button
                  onClick={() => handleItemCountChange(1)}
                  style={{
                    cursor: "pointer",
                    padding: "2px",
                    border: "none",
                    background: "transparent",
                    fontSize: "7px",
                  }}
                >
                  &#9650;
                </button>
                <button
                  onClick={() => handleItemCountChange(-1)}
                  style={{
                    cursor: "pointer",
                    padding: "2px",
                    border: "none",
                    background: "transparent",
                    fontSize: "7px",
                  }}
                >
                  &#9660;
                </button>
              </div>
            </div>
            <button onClick={handleAddToCart} className="h-8 bg-yellow-500 w-[8rem] rounded-full">
              ADD TO CART
            </button>
            
 <div className="flex items-center w-8 h-8 pl-2 bg-white border border-gray-400 border-solid rounded-full cursor-pointer">

<CiHeart className=""/>
    

</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
