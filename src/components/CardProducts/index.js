import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {  CartProductsContainer, CartProductsItem, CartProductsItemColumn, DecreaseButton, IncreaseButton, ProductImage, RemoveButton } from "./CartProductsElements";

const CartProducts = () => {
    const { cartItems, increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <div>
            <CartProductsContainer>
                {
                    cartItems.map(product =>  {
                        return (
                            <CartProductsItem key={product.id}>
                                <CartProductsItemColumn>
                                    <ProductImage src={product.img} alt={product.name} />
                                </CartProductsItemColumn>

                                <CartProductsItemColumn>
                                    <h5 className="mb-1">{product.name}</h5>
                                    <p className="mb-1">Precio: S/ {product.price} </p>
                                    
                                </CartProductsItemColumn>

                                <CartProductsItemColumn text="center">
                                    <p className="mb-0">Cantidad: {product.quantity}</p>
                                </CartProductsItemColumn>

                                <CartProductsItemColumn text="right">
                                    <IncreaseButton onClick={() => increase(product)} />
                                    {
                                        product.quantity > 1 &&
                                        <DecreaseButton onClick={() => decrease(product)} />
                                    }

                                    {
                                        product.quantity === 1 &&
                                        <RemoveButton onClick={() => removeProduct(product)} />
                                    }
                                    
                                </CartProductsItemColumn>
                            </CartProductsItem>
                        )
                    })
                }

            </CartProductsContainer>
        </div>
    )
}

export default CartProducts;