import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useProducts } from '../../context/ProductContextProvider';
import { useSearch } from '../../context/SearchContextProvider';
import CardProduct from './CardProduct';

const Products = () => {
    const { products, getProducts } = useProducts();
    const {  search } = useSearch()


    useEffect(() => {
        getProducts();
    }, []);

    const filterSearch = products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mx: 8,
                mb: 5
            }}
        >
            {filterSearch.map((item) => (
                <CardProduct key={item.id} item={item} />
            ))}
        </Box>
    );
};

export default Products;