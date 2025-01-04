import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const Products = () => {
  const [data, setdata] = useState([]);

  const allData = () => {
    getDocs(collection(db, "Products"))
      .then((querySnapshot) => {
        const filterdata = querySnapshot.docs.map((el) => ({ id: el.id, ...el.data() }));
        setdata(filterdata);
        console.log(filterdata);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  const deleteproduct = (id) => {
    deleteDoc(doc(db, "Products", id))  
      .then(() => {
        alert("Data Deleted...");
        allData();  
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", width: "95%", margin: "auto" }}>
        {data.map((el) => (
          <div key={el.id} style={{ border: "1px solid grey", padding: "10px", textAlign: "center" }}>
            <img src={el.image} alt="" height={200} width={200} />
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <h3>{el.category}</h3>
            <p>{el.description}</p>
            <button style={{ backgroundColor: "grey", color: "white", border: "none", padding: "10px 20px" }}>
              <Link to={`/editproduct/${el.id}`} style={{ textDecoration: "none", color: "white" }}>
                EDIT
              </Link>
            </button>
            &nbsp;
            <button
              onClick={() => deleteproduct(el.id)}
              style={{ backgroundColor: "grey", color: "white", border: "none", padding: "10px 20px" }}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
