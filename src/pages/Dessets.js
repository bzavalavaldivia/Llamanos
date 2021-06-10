import React from 'react';
import Cover from '../components/Cover';
import Products from '../components/Products';
import { products } from '../data/products';

const Desserts = () => {
  return (
    <>
      <Cover title="Disfruta nuestros deliciosos postres" />
      <Products heading='Nuestros Postres' data={products.filter(p => p.category === 'dessert')} />
    </>
  )
};
  
export default Desserts;