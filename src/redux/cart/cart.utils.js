
/**
 * 
 * @param {*} cartItems previous items in the cart
 * @param {*} cartItemToAdd  the item to add to the cart
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //check if the item to be added already exists 
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    // if it exist increase its quantity
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                : { ...cartItem }
        )
    }
    //if it doesn't exit add it to the array with previous items
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}