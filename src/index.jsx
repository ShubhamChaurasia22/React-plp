import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App'; 
import { AppProvider } from './stores/product-data.jsx';
import { FilterContextProvider } from './stores/filter-data.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
