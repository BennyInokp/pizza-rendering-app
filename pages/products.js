
import React, { useState } from "react";
import Link from "next/link";
//import AdminLogin from "./AdminLogin";
//import AddPizzaForm from "./AddPizzaForm";
import { useRouter } from "next/router";
import Image from 'next/image';
import { GoFilter } from "react-icons/go";

export const pizzas = [
  {
    id: 1,
    name: "PepperoniI",
    image: "/images/bread.jpg",
    price: "$13.99",
    rating: 5,
    description: "Spicy Pepperoni pizza.",
  },
  {
    id: 2,
    name: "MargheritaA",
    image: "/images/pizza1.png",
    price: "$9.99",
    rating: 4,
    description: " Margherita variation.",
  },
  {
    id: 3,
    name: "Vegetarian Delight",
    image: "/images/bread1.png",
    price: "$12.99",
    rating: 4,
    description: " vegetarian pizzas.",
  },
  {
    id: 4,
    name: "Hawaiian Paradise",
    image: "/images/pizza.png",
    price: "$14.99",
    rating: 4,
    description: " Hawaiian pizza.",
  },
  {
    id: 5,
    name: "Chicken Supreme",
    image: "/images/bread1.png",
    price: "$15.99",
    rating: 4,
    description: "supreme taste .",
  },
  {
    id: 6,
    name: "BBQ Feast",
    image: "/images/pizza4.png",
    price: "$16.99",
    rating: 5,
    description: "Savor the rich flavors .",
  },
];

const Products = () => {
  const router = useRouter();
  const isProductsPage = router.pathname === "/products";

  const [hoveredStar, setHoveredStar] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortOption, setSortOption] = useState("name");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAddPizzaForm, setShowAddPizzaForm] = useState(false);

  const handleStarHover = (index) => {
    setHoveredStar(index + 1);
  };

  const handleStarLeave = () => {
    setHoveredStar(null);
  };

  const handleStarClick = (index) => {
    console.log(`You clicked on star ${index + 1}`);
  };

  const handleLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  const handleAddPizzaClick = () => {
    setShowAddPizzaForm(!showAddPizzaForm);
  };

  const handleCloseFormClick = () => {
    setShowAddPizzaForm(false);
  };

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

  return (
    <div className="mt-[13rem] h-screen w-full px-[2rem]"> 
      {isProductsPage && (
        <AdminLogin
          onLogin={handleLogin}
          onLogout={handleLogout}
          isAdminLoggedIn={isAdminLoggedIn}
        />
      )}
       <div className='flex gap-[84rem] '>
        <span className='flex bg-yellow-500 rounded-full h-7 w-[5rem] gap-1'>
        <GoFilter  className='mt-1 ml-3 text-white'/>
        <p className='mr-2 text-white'>Filter</p>
        </span>
        <span className='flex gap-8'>
<p className='font-bold '>Showing all 9 results</p>

<select class=" border border-3 form-select pr-[5rem]" id="Default sorting" name="Default sorting"> 
            <option>Default sorting</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
            <option value="Pizza">Pizza</option>
           
</select>

        </span>
      </div>

      {/* <div className="flex items-center mb-4"></div>

      <button className="mt-4 button" onClick={handleAddPizzaClick}>
        Add New Pizza
      </button> */}

      {/* <AddPizzaForm
        showForm={showAddPizzaForm}
        onCloseFormClick={handleCloseFormClick}
      /> */}

      <div className="grid grid-cols-3 gap-4 mt-6">
        {filteredAndSortedPizzas.map((pizza) => (
          <div key={pizza.id} className="flex flex-col items-center p-4 border">
            <Link href={`/product/${pizza.id}`} passHref>
            <img
                src={pizza.image}
                alt={pizza.name}
                className="w-50% h-40 object-contain mb-2"
              />
            </Link>
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
                  onMouseEnter={() => handleStarHover(index)}
                  onMouseLeave={handleStarLeave}
                  onClick={() => handleStarClick(index)}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mb-2 text-center">{pizza.description}</p>
            <Link href={`/product/${pizza.id}`} passHref>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

