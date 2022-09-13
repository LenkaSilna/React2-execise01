import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/navigation';

const ProductDetail = () => {
  let { productId } = useParams();

  const [detail, setDetail] = useState({});

  const url = `https://apps.kodim.cz/react-2/xxxmuck/products/${productId}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const NewData = await response.json();
      setDetail(NewData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Link to={'/'}>
        <Navigation />
      </Link>
      <main>
        <div key={detail.id} className="order-main">
          <img src={detail.image} alt="" />
          <div className="order-section">
            <h3 className="name">{detail.name}</h3>
            <button className="order-btn">Objednat</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
