import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductHook } from './product-data';
import reducer from '../reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    filterProductsLength: 0,
    sorting: '',
    filters: {
        category: "",
        brand: ""
    }
};

const FilterContextProvider = ({ children }) => {

    const { products } = useProductHook();

    const [filterState, dispatch] = useReducer(reducer, initialState);

    // sorting function
    const sorting = (event) => {
        const sortValue = event.target.value;
        dispatch({type: "Sorting", payload: sortValue })
    }

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "Update_Filter_Product", payload: { name, value }});
    }

    const clearFilters = () => {
        dispatch({type: "Clear_Filter_Product" });
    }

    useEffect(() => {
        dispatch({ type: "Load_Filter_Products", payload: products });
        dispatch({ type: "Sort_Products" });
    }, [products, filterState.sorting, filterState.filters]);

    useEffect(() => {
        dispatch({ type: "Filter_Products", payload: products });
    }, [products]);

    return <FilterContext.Provider value={{ ...filterState, sorting, updateFilterValue, clearFilters }}>{children}</FilterContext.Provider>;
}

//Custom Hooks
const useFilterContext = () => {
    return (useContext(FilterContext))
};

export { FilterContextProvider, useFilterContext, FilterContext };
