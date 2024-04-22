const filterReducer = (state, action) => {
    switch (action.type) { 
        case "Filter_Products":
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filterProductsLength: action.payload.length,
            };
        
        case "Sorting":
            return {
                ...state,
                sorting: action.payload,
            };

        case "Sort_Products":
            const { filterProducts } = state;
            const tempSortData = [...filterProducts];

            const sortingProduct = (a, b) => {
                const aDiscount = a.discountPercentage || 0;
                const bDiscount = b.discountPercentage || 0;
                const aPrice = a.price || 0;
                const bPrice = b.price || 0;

                const sortingMap = {
                    highest: aDiscount ? (bDiscount ? bDiscount - aDiscount : bPrice - aDiscount) : (bDiscount ? bDiscount - aPrice : bPrice - aPrice),
                    lowest: aDiscount ? (bDiscount ? aDiscount - bDiscount : aPrice - bDiscount) : (bDiscount ? aPrice - bDiscount : aPrice - bPrice),
                    priceUp: a.title.localeCompare(b.title),
                    priceDown: b.title.localeCompare(a.title),
                };

                return sortingMap[state.sorting];
            };

            const newSortData = tempSortData.sort(sortingProduct);

            return {
                ...state,
                filterProducts: newSortData,
            };

        case "Update_Filter_Product":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters, 
                    [name]: value,
                }
            }

        case "Load_Filter_Products":
            let { allProducts } = state;
            let tempFilters = [ ...allProducts ];

            const { category, brand } = state.filters;

            if ( category ) {
                tempFilters = tempFilters.filter((currentElement) => {
                    return currentElement.category.toLowerCase() === category.toLowerCase();
                });
            }

            if ( brand ) {
                tempFilters = tempFilters.filter((currentElement) => {
                    return currentElement.brand.toLowerCase() === brand.toLowerCase()
                });
            }

            return {
                ...state,
                filterProducts: tempFilters,
                filterProductsLength: tempFilters.length,
            }
        
        case "Clear_Filter_Product":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: "",
                    brand: "",
                }
            }
        default:
            return state;
    }
};

export default filterReducer;
