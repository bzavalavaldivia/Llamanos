import React, { useContext } from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Feature from '../components/Feature';
import { ProductsContext } from '../contexts/ProductsContext';

const Home = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
      <Hero />
      <Products heading='Nuestras Pizzas' data={products.filter(p => p.category === 'pizza')} />
      <Feature />
      <Products heading='Nuestros Postres' data={products.filter(p => p.category === 'dessert')} />
    </>
  )
};

export default Home;