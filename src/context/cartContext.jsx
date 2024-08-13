import { useContext, createContext,useState } from "react";  

const cartContext = createContext()

export function CartProvider({Children}){
    const [cart, setCart] = useState([])

    const addToCart = (options, quantity, id) => {
        setCart([...cart, { options, quantity, id}])
    }
    
    const removeFromCart = (id) =>{
    setCart(cart,filter(el => el.id !== id))
    }

    return(
        <cartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {Children}
        </cartContext.Provider>
    )
}


export function useCart() {
    return useContext(cartContext)
}