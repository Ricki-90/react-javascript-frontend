import ShoppingCart from "../components/ShoppingCart";

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()


export const useSHoppingCart = () => {
    return useContext (ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {



    return <ShoppingCartContext.Provider value={{}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}