import React, { useState } from "react";
import { View } from "./View";
import { Link } from "react-router-dom";

const ProductList = ({ items, deleteItem, setItems }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);

  const handleRemoveAll = () => {
    setItems([]);
    setShowConfirm(false);
  };

  return (
    <div className="main-content">
      <div className="itemWrapper">
        <h1 className="itemHeader">🛍 Product List</h1>
        <Link className="navButton" to="/add-item">
          + Add Item
        </Link>
      </div>

      <div className="view-container">
        {items.length > 0 ? (
          <>
            <div className="stats-bar">
              <span className="stats-item">
                <strong>{items.length}</strong> {items.length === 1 ? "item" : "items"}
              </span>
              <span className="stats-total">
                Total: ₹{totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="table-responsive-wrapper">
              <table className="product-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View items={items} deleteItem={deleteItem} />
                </tbody>
              </table>
            </div>

            <div className="action-bar">
              {showConfirm ? (
                <div className="confirm-dialog">
                  <span className="confirm-text">
                    Remove all {items.length} items?
                  </span>
                  <button className="confirm-yes-btn" onClick={handleRemoveAll}>
                    Yes, Remove All
                  </button>
                  <button
                    className="confirm-no-btn"
                    onClick={() => setShowConfirm(false)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="remove-all-btn"
                  onClick={() => setShowConfirm(true)}
                >
                  🗑 Remove All
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon">🛒</span>
            <h2 className="empty-state-title">Your list is empty</h2>
            <p className="empty-state-subtitle">
              Tap <strong>+ Add Item</strong> to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
