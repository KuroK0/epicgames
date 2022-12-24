import React, { createContext, useContext, useState } from 'react';


export const productSearch = createContext();

export const useSearch = () => {
    return useContext(productSearch);
};

const SearchContextProvider = ({children}) => {


    const [search, setSearch] = useState('')
    
    const values = {
        setSearch,
        search
    };
    return (
        <productSearch.Provider value={values}>
            {children}
        </productSearch.Provider>
    );
};

export default SearchContextProvider;