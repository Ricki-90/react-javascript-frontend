import ShoppingCart from "../components/ShoppingCart";

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()


export const useShoppingCart = () => {
    return useContext (ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articaleNumber) => {
        return cartItems.find(item => item.articaleNumber === articaleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem) => {
        const {articaleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articaleNumber === articaleNumber) == null) {
                return [...items, { articaleNumber, product, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.articaleNumber === articaleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem) => {
        const {articaleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articaleNumber === articaleNumber).quantity === 1) {
                return items.filter(item => item.articaleNumber !== articaleNumber)
            } else {
                return items.map(item => {
                    if (item.articaleNumber === articaleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articaleNumber) => {
        setCartItems(items => {
            return items.filter(item => item.articaleNumber !== articaleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}