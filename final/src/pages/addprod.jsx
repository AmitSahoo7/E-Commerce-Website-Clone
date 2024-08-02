import React, { useState } from "react";
import { addProduct } from "../components/link";
import './addprod.css';

const AddProd = () => {
  const initialProductState = {
    id: "",
    title: "",
    price: "",
    originalPrice: "",
    image: "",
    colors: "",
    rating: {
      rate: "",
      count: "",
    },
    bestSeller: false,
  };

  const [product, setProduct] = useState(initialProductState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const colorsArray = product.colors.split(",").map(color => color.trim());
    const newProduct = await addProduct({ ...product, colors: colorsArray });
    console.log(newProduct);
    setProduct(initialProductState);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setProduct({
        ...product,
        [name]: checked,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
    if (name === "rate" || name === "count") {
      setProduct({
        ...product,
        rating: {
          ...product.rating,
          [name]: value,
        },
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  return (
    <div className="adding">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          placeholder="ID*"
          required
        />
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Title*"
          required
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="FinalPrice*"
          required
        />
        <input
          type="text"
          name="originalPrice"
          value={product.originalPrice}
          onChange={handleChange}
          placeholder="OriginalPrice(Optional)"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL*"
          required
        />
        <input
          type="text"
          name="colors"
          value={product.colors}
          onChange={handleChange}
          placeholder="Colors (comma-separated)*"
          required
        />
        <input
          type="number"
          name="rate"
          value={product.rating.rate}
          onChange={handleChange}
          placeholder="Rate(0 - 5)*"
          required
        />
        <input
          type="number"
          name="count"
          value={product.rating.count}
          onChange={handleChange}
          placeholder="Count*"
          required
        />
        <label>
          Best Seller
          <input
            type="checkbox"
            name="bestSeller"
            checked={product.bestSeller}
            onChange={handleChange}
          />
        </label>
        <input id="ad" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProd;
