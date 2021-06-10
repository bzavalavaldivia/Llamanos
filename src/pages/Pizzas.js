import React from 'react';
import Cover from '../components/Cover';
import Products from '../components/Products';
import { products } from '../data/products';

const Pizzas = () => {
  return (
    <>
      <Cover title="Disfruta nuestras deliciosas pizzas" />
      <Products heading='Nuestras Pizzas' data={products.filter(p => p.category === 'pizza')} />
    </>
  )
};
  
export default Pizzas;