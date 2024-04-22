export default function ProductReducer (state, action) {
    switch (action.type) {
        case "Product_Loading":
            return {
                ...state,
                isLoading: true,
            };
        
        case "Product_Data":
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        
        case "Product_Error":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        
        default:
            return state;
    }
};
