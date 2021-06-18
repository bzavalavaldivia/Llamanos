
const Storage = (cartItems) => {
    console.log('problem here')
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (state.cartItems.length === 0) {
                state.checkout = false;
            }

            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case "INCREASE":
            console.log('incrementando', state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity);
            console.log(state.cartItems)
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            // let index = state.cartItems.findIndex(item => item.id === action.payload.id);
            // let quantity = state.cartItems[index].quantity;
            // state.cartItems[index].quantity = quantity + 1;
            console.log('incrementado', state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity);
            console.log(state.cartItems)
            console.log('teste', state.cartItems[0].quantity)
            console.log('index', state.cartItems.findIndex(item => item.id === action.payload.id))
            console.log(state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity)
            state.cartItems[0].teste = state.cartItems[0].quantity

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        default:
            return state

    }
}