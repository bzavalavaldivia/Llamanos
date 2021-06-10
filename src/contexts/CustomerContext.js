import React, { createContext, useReducer } from "react";
import { customerData, customerFound } from "../data/customer";
import { CustomerReducer } from "./CustomerReducer";

export const CustomerContext = createContext();

const initialState = { customer: customerData, isThereCustomer: customerFound };

const CustomerContextProvider = ({children}) => {
    const [state, dispatch]  = useReducer(CustomerReducer, initialState)

    const addCustomer = payload => {
        dispatch({ type: 'ADD_CUSTOMER', payload })
    }

    const contextValues = {
        addCustomer,
        ...state
    }

    return (
        <CustomerContext.Provider value={contextValues}>
            { children }
        </CustomerContext.Provider>
    )
}

export default CustomerContextProvider;