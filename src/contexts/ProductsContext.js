import React, { createContext, useState } from 'react';
import { products as dummyProducts } from '../data/products';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const [products] = useState(dummyProducts);

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;