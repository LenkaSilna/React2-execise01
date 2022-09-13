import React, { useEffect, useState } from 'react';
import Product from '../components/product';
import { Link } from 'react-router-dom';

const ProductsPage = ({ products }) => {
  const productsItem = products.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`/product/${item.id}`}>
          <Product key={item.id} name={item.name} image={item.image} />
        </Link>
      </div>
    );
  });

  return <>{productsItem}</>;
};

export default ProductsPage;
