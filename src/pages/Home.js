import React, { useContext } from 'react';
import Products from '../components/Products';
import Feature from '../components/Feature';
import { ProductsContext } from '../contexts/ProductsContext';
import Carousel from '../components/Carousel';
import { carouselData } from '../data/carousel';

const Home = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
      <Carousel items={carouselData} />
      <Products heading='Nuestras Pizzas' data={products.filter(p => p.category === 'pizza')} />
      <Feature />
      <Products heading='Nuestros Postres' data={products.filter(p => p.category === 'dessert')} />
    </>
  )
};

export default Home;