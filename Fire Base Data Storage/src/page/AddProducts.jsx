import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../services/firebase";

const initialData = {
  title: "",
  price: "",
  image: "",
  category: "",
  description: "",
};

const AddProduct = () => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const { title, price, description, image, category } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
  
    // Basic validation
    if (!title || !price || !image || !category || !description) {
      setError("All fields are required!");
      return;
    }

    if (isNaN(price)) {
      setError("Price must be a valid number!");
      return;
    }

    // Add document to Firestore
    addDoc(collection(db, "Products"), {
      ...formData,
      price: parseFloat(price), 
    })
      .then((res) => {
        alert("Product added successfully!");
        setFormData(initialData); // Reset form data
      })
      .catch((err) => {
        console.error("Error adding product:", err);
        setError("Failed to add product. Please try again.");
      });
  };

  return (
    <div>
      <h1 style={{ marginLeft: "30%", marginTop: "5%" }}>Add Product Page</h1>
      <div style={{ marginLeft: "30%", marginTop: "5%" }}>
        <form style={{ width: "30%", padding: "20px" }} onSubmit={handleSubmit}>
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
          
          <input
            style={{ width: "80%", padding: "10px" }}
            name="image"
            value={image}
            onChange={handleChange}
            type="text"
            placeholder="Image URL"
          />
          <br />
          <br />
          <input
            style={{ width: "80%", padding: "10px" }}
            name="title"
            value={title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
          />
          <br />
          <br />
          <select
            style={{ width: "80%", padding: "10px" }}
            name="category"
            value={category}
            onChange={handleChange}
          >
            <option value="">Select Your Category</option>
            <option value="Men's Cloths">Men's Clothing</option>
            <option value="Women's Cloths">Women's Clothing</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Electronics">Electronics</option>
          </select>
          <br />
          <br />
          <input
            style={{ width: "80%", padding: "10px" }}
            name="price"
            value={price}
            onChange={handleChange}
            type="text"
            placeholder="Price"
          />
          <br />
          <br />
          <input
            style={{ width: "80%", padding: "10px" }}
            name="description"
            value={description}
            onChange={handleChange}
            type="text"
            placeholder="Description"
          />
          <br />
          <br />
          <input
            style={{
              marginLeft: "0%",
              border: "none",
              backgroundColor: "black",
              color: "white",
              padding: "10px 18px",
            }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
