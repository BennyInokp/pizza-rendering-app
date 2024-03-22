import React, { useState } from "react";

const AddPizzaForm = ({ showForm, onCloseFormClick }) => {
  const [pizzaTitle, setPizzaTitle] = useState("");
  const [pizzaDescription, setPizzaDescription] = useState("");
  const [pizzaPrices, setPizzaPrices] = useState({
    small: "",
    medium: "",
    large: "",
  });
  const [extraItem, setExtraItem] = useState("");
  const [extraPrice, setExtraPrice] = useState("");

  const handleAddPizza = (e) => {
    e.preventDefault();
    
    onCloseFormClick();
  };

  return (
    <div className={`flex items-center justify-center h-screen ${showForm ? "" : "hidden"}`}>
      
        <form className="flex flex-col items-center w-[4rem]">
        <label htmlFor="Choose Pizza Image" className="text-[1.5rem]">
          <span className="flex gap-1 mr-[6.5rem]"> 
        <p>Choose </p>
        <p> Pizza</p>
        <p>  Image</p>
        </span>
  </label>
         
        <input className="mr-[1rem] mt-4 border border-gray-300 rounded]" type="file" id="pizzaImage" /> 
<div>
<label htmlFor="PizzaTitle" className="block mt-4">
    Pizza Title:
  </label>
  <input
    type="text"
    id="PizzaTitle"
    placeholder="PizzaTitle"
    className="w-[18.7rem] px-4 py-2 mb-4 border border-gray-300 rounde"
  />
  
  <label htmlFor="pizzaDescription" className="block mb-2">
    Pizza Description:
  </label>
  <input
    type="text"
    id="pizzaDescription"
    placeholder="Pizza Description"
    className="w-[18.7rem] px-4 py-2 mb-4 border border-gray-300 rounded"
  />

  <label htmlFor="pizzaPrices" className="block mb-2">
    Pizza Prices:
  </label>

  {/* Small Price */}
  <div className="mb-4">
    
    <input
      type="text"
      id="smallPrice"
      placeholder="Small"
      className="w-[18.7rem] px-4 py-2 border border-gray-300 rounded"
    />
  </div>

  {/* Medium Price */}
  <div className="mb-4">
   
    <input
      type="text"
      id="mediumPrice"
      placeholder="Medium"
      className="w-[18.7rem] px-4 py-2 border border-gray-300 rounded"
    />
  </div>

  {/* Large Price */}
  <div className="mb-4">
    
    <input
      type="text"
      id="largePrice"
      placeholder="Large"
      className="w-[18.7rem] px-4 py-2 border border-gray-300 rounded"
    />
  </div>

  <label htmlFor="extraItem" className="block mb-2">
    Extra Item:
  </label>
  <input
    type="text"
    id="extraItem"
    placeholder="Item"
    className="w-[18.7rem] px-4 py-2 mb-4 border border-gray-300 rounded"
  />

  <input
    type="text"
    id="extraPrice"
    placeholder="Price"
    className="w-[18.7rem] px-4 py-2 mb-4 border border-gray-300 rounded"
  />

<label htmlFor="add" className="block mb-2">
    Add:
  </label>
  <input
    type="text"
    id="extraItem"
    placeholder="Item"
    className="w-[18.7rem] px-4 py-2 mb-4 border border-gray-300 rounded"
  />

  <div className="flex ml-[6.5rem]">
    <button onClick={onCloseFormClick} className="h-10 px-4 py-2 mr-2 text-white bg-gray-500 rounded">
      Close
    </button>
    <button className="h-10 px-4 py-2 text-white bg-blue-500 rounded w-[7.5rem]">Create Pizza</button>
  </div>
</div>
</form>
   </div>
  );
};

export default AddPizzaForm;