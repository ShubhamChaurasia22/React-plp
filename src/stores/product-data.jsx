import { createContext, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/productReducer.jsx';

const AppStore = createContext();

const API = 'https://dummyjson.com/products?limit=30';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "Product_Loading"});
        try {
            const res = await axios.get(url);
            const products = res.data.products;
            dispatch({type: "Product_Data", payload: products});
        } catch (error) {
            dispatch({type: "Product_Error"});
        }
    };
    
    useEffect(()=>{
        getProducts(API);
    }, []);

    return <AppStore.Provider value={{ ...state }}>{children}</AppStore.Provider>;
};

//Custom Hooks
const useProductHook = () => {
    return (useContext(AppStore))
};

export { AppProvider, AppStore, useProductHook };