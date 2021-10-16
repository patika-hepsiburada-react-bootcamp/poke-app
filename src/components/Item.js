import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className="item">
      <Link to={`/${item.id}`}>
        <div className="title">{item.name}</div>
        <img src={item.image} alt="" className="item-img" />
      </Link>
    </div>
  );
}

export default Item;
