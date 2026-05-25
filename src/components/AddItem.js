import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const AddItem = ({
  handleAddItemSubmit,
  setTitle,
  setQuantity,
  setPrice,
  title,
  quantity,
  price,
}) => {
  const [toast, setToast] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    const itemTitle = title.trim();
    handleAddItemSubmit(e);
    setToast(`"${itemTitle}" added to your list!`);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="main-content">
      <div className="itemWrapper">
        <Link className="navButton" to="/">
          ← Products
        </Link>
        <h1 className="itemHeader">Add Item</h1>
      </div>

      <div className="form-wrapper">
        <h2 className="form-title">📝 New Product Details</h2>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="item-title">
              Title
            </label>
            <input
              id="item-title"
              type="text"
              className="form-input"
              required
              placeholder="e.g. Milk, Bread, Rice…"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="item-quantity">
              Quantity
            </label>
            <input
              id="item-quantity"
              type="text"
              className="form-input"
              required
              placeholder="e.g. 2 litres, 1 dozen, 500g…"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="item-price">
              Price (₹)
            </label>
            <input
              id="item-price"
              type="number"
              className="form-input"
              required
              placeholder="0.00"
              min="0"
              step="0.01"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <button type="submit" className="submit-btn">
            + Add to List
          </button>
        </form>
      </div>

      {toast && (
        <div className="toast-container" role="alert" aria-live="polite">
          <div className="toast-msg">✓ {toast}</div>
        </div>
      )}
    </div>
  );
};
