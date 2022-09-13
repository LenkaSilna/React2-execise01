import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Navigation from './components/navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import ProductsPage from './page/ProductsPage';
import ProductDetail from './page/ProductDetail';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/react-2/xxxmuck/products`,
      );
      const NewData = await response.json();
      setData(NewData);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <Navigation />
      <main>
        <div className="main">
          <h1 className="title">Aktuální nabídka</h1>
          <p className="text">
            Nejnovější prémiové produkty od předních českých designérů.
            <br />
            Doprava zdrarma až k vám domů, na cenu nehleďte.
          </p>
        </div>
        <div className="wrapper">
          <ProductsPage products={data} />
        </div>
      </main>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>,
);
