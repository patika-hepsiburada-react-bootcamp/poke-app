import React from 'react';

function Item({ item }) {
  return (
    <div className="item">
      <div className="title">{item.name}</div>
      <img src={item.image} alt="" className="item-img" />
    </div>
  );
}

export default Item;
