import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART,  } from "./constance"

export const addToCart =(data) => {
    console.log("action called" , data)
    return {
        type:ADD_TO_CART,
        data
    }    
}


export const removeFromCart =(data) => {
    console.log("action called" , data)

    return {
        type:REMOVE_FROM_CART,
        data
    }    
}


export const emptyCart =() => {
    return {
        type:EMPTY_CART,
    }    
}