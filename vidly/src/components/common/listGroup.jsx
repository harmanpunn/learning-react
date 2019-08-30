import React from "react";

const ListGroup = props => {
  const { items, textProperty, valueProperty, onItemSelect } = props;
  return (
    <ul className="list-group">
      <li style={{ cursor: "pointer" }} className="list-group-item">
        All Genres
      </li>
      {items.map(item => (
        <li
          style={{ cursor: "pointer" }}
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className="list-group-item"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
