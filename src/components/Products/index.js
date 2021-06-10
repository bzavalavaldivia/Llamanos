import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = product => {
      return !!cartItems.find(item => item.id === product.id);
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                {
                  isInCart(product) &&
                  <ProductButton onClick={() => increase(product)}>{product.button} más</ProductButton>
                }
                {
                  !isInCart(product) &&
                  <ProductButton onClick={() => addProduct(product)}>{product.button} al carro</ProductButton>
                }
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
