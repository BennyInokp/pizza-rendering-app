import React, { useState } from "react";
import Image from 'next/image';
import { GoFilter } from "react-icons/go";

export const pizzas = [
  {
    id: 1,
    name: "PepperoniI",
    image: "/images/bread.jpg",
    price: "$13.99",
    rating: 5,
    description: " tag : Healthy, Organic, Chicken, Sauce",
  },
  {
    id: 2,
    name: "MargheritaA",
    image: "/images/pizza.png",
    price: "$9.99",
    rating: 4,
    description: " tag: Healthy, Organic, Chicken, Sauce",
  },
  {
    id: 3,
    name: "Vegetarian Delight",
    image: "/images/bread1.jpg",
    price: "$12.99",
    rating: 4,
    description: " tag: Healthy, Organic, Chicken, Sauce",
  },
  {
    id: 4,
    name: "Hawaiian Paradise",
    image: "/images/pizza.png",
    price: "$14.99",
    rating: 4,
    description: " tag: Healthy, Organic, Chicken, Sauce",
  },
  {
    id: 5,
    name: "Chicken Supreme",
    image: "/images/bread1.jpg",
    price: "$15.99",
    rating: 4,
    description: "tag: Healthy, Organic, Chicken, Sauce ."
  },
  {
    id: 6,
    name: "BBQ Feast",
    image: "/images/pizza4.png",
    price: "$16.99",
    rating: 5,
    description: "tag: Healthy, Organic, Chicken, Sauce .",
  },
];

const Products = () => {
  
  const [hoveredStar, setHoveredStar] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortOption, setSortOption] = useState("name");
 
  const [imageData, setImageData] = useState(null); 
  
  const filteredAndSortedPizzas = pizzas
    .filter((pizza) => {
      if (filter === "all") {
        return true;
      } else {
        return pizza.description.toLowerCase().includes(filter.toLowerCase());
      }
    })
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "price") {
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      } else if (sortOption === "rating") {
        return b.rating - a.rating;
      }
    });

     // Function to handle adding new pizza
  const handleAddPizza = (imageData) => {
    
    console.log("New pizza added with image data:", imageData);
    setShowAddPizzaForm(false);
  };

  return (
    <div className="mt-[13rem] h-screen w-full px-[2rem]"> 
      
       <div className='flex gap-[84rem] mt-5'>
        <span className='flex bg-yellow-500 rounded-full h-7 w-[5rem] gap-1 '>
        <GoFilter  className='mt-1 ml-3 text-white'/>
        <p className='mr-2 text-white ' >Filter</p>
       
        </span>
        
      </div>

      <div className="flex items-center mb-4"></div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {filteredAndSortedPizzas.map((pizza) => (
          <div key={pizza.id} className="flex flex-col items-center p-4 border">
           
            <img
                src={pizza.image}
                alt={pizza.name}
                className="w-50% h-40 object-contain mb-2"
              />
            
            <p className="mb-2 text-center">
              <b>{pizza.name}</b>{" "}
              <span style={{ color: "red" }}>{pizza.price}</span>
            </p>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <span
                  key={index}
                  className={`cursor-pointer ${
                    index <= (hoveredStar || pizza.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                 
                  
                  onClick={() => handleStarClick(index)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mb-2 text-center">{pizza.description}</p>
            
            <button className="flex h-10 bg-yellow-500 rounded-full w-[10rem]">
<Image
  src="/whitecart.png"
  alt="Pizza"
  className='w-12 h-12 '
  width={100}
   height={10}
  priority
 />
  <p className="mt-2.5"> ORDER NOW</p>
</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;






