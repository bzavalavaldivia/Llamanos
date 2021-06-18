import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartProducts from '../components/CardProducts';
import { CartButton, CartButtonContainer, CartCheackoutContainer, CartColumn, CartContainer, CartContent, CartDivider, CartEmpty } from '../components/Cart/CartElements';
import Cover from '../components/Cover';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);

    return (
        <>
            <Cover title="Estás a un paso de realizar tu pedido" />

            <CartContainer>
                <CartContent>
                    <CartColumn col={9}>
                        {
                            cartItems.length > 0 ?
                            <CartProducts /> :
                            <CartEmpty>
                                Tu carrito está vacío
                            </CartEmpty>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </CartColumn>
                    {
                        cartItems.length > 0 && 
                        <CartColumn col={3}>
                            <CartCheackoutContainer>
                                <p style={{marginBottom: '.25rem'}}>Cant. productos</p>
                                <h4 style={{marginBottom: '1rem', textAlign: 'right'}}>{itemCount}</h4>
                                <p style={{marginBottom: '.25rem'}}>Total a pagar</p>
                                <h3 style={{textAlign: 'right'}}>S/ {total}</h3>
                                <CartDivider />
                                <CartButtonContainer>
                                    <CartButton primary onClick={handleCheckout}>PAGAR</CartButton>
                                    <CartButton onClick={clearCart}>VACIAR</CartButton>
                                </CartButtonContainer>

                            </CartCheackoutContainer>
                        </CartColumn>
                    }
                </CartContent>
            </CartContainer>
        </>
    );
};

export default Cart;