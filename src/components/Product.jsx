import React from 'react';

const Product = ({ id, name, image }) => {
  return (
    <div id={id}>
      <img src={image} alt="" width={'250px'} />
      <h3 className="name">{name}</h3>
    </div>
  );
};
export default Product;
