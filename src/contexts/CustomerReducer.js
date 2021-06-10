export const CustomerReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            if (!state.isThereCustomer) {
                localStorage.setItem('customer', JSON.stringify(action.payload));

                state.customer = action.payload;
                state.isThereCustomer = true;
            }

            return {
                ...state
            }
        default:
            return state
    }
}