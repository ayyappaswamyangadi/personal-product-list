import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ items, deleteItem }) => {
  const roundOff = (x) => Number.parseFloat(x).toFixed(2);

  return items.map((item, index) => (
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td className="price-cell">₹ {roundOff(item.price)}</td>
      <td>
        <button
          className="delete-btn"
          onClick={() => deleteItem(item.id)}
          aria-label={`Delete ${item.title}`}
          title={`Delete ${item.title}`}
        >
          <Icon icon={trash} size={17} />
        </button>
      </td>
    </tr>
  ));
};
