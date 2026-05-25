import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { AddItem } from "./components/AddItem";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

const getDataFromLS = () => {
  try {
    const data = localStorage.getItem("Items");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

function App() {
  const [items, setItems] = useState(getDataFromLS);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItemSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newItem = {
        id: Date.now(),
        title: title.trim(),
        quantity: quantity.trim(),
        price: parseFloat(price),
      };
      setItems((prev) => [...prev, newItem]);
      setTitle("");
      setQuantity("");
      setPrice("");
    },
    [title, quantity, price]
  );

  const deleteItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(items));
  }, [items]);

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route
            path="/add-item"
            element={
              <AddItem
                handleAddItemSubmit={handleAddItemSubmit}
                setTitle={setTitle}
                setQuantity={setQuantity}
                setPrice={setPrice}
                title={title}
                quantity={quantity}
                price={price}
              />
            }
          />
          <Route
            path="/"
            element={
              <ProductList
                items={items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />
          <Route
            path="/product-list"
            element={
              <ProductList
                items={items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />
          <Route
            path="*"
            element={
              <ProductList
                items={items}
                deleteItem={deleteItem}
                setItems={setItems}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
