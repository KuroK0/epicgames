import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider.js';

const EditProduct = () => {

    const { productDetails, getProductDetails, saveEditedProduct } = useProducts();

    const navigate = useNavigate();
    const [product, setProduct] = useState(productDetails);
 
    const {id} = useParams()

    useEffect(() => {
        getProductDetails(id)
    }, []);

    useEffect(() => {
        setProduct(productDetails)
    }, [productDetails]);

    const handleInp = (e) => {
            let obj = { ...product, [e.target.name]: e.target.value };
            setProduct(obj);
    
    };

    return (
        <>
            <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor:'whitesmoke', my: 5 }}>
     
      
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">Редактировать</Typography>
     </CardContent>
     <Box>
       <TextField 
        onChange={handleInp}
        className='input' 
        name='name' 
        placeholder='На Англ'  
        variant="filled" 
        helperText="Название игры"  
        sx={{mx: 3, width: 300, color: 'gray'}} 
        value={product.name || ''} />
       <TextField
        onChange={handleInp} 
        className='input' 
        name='price' 
        placeholder='Цена в $'  
        variant="filled" 
        helperText='Цена'  
        sx={{mx: 3, width: 300, color: 'gray'}} 
        value={product.price || ''} />
       <TextField
        onChange={handleInp} 
        className='input' 
        name='image' 
        placeholder='Ссылка на Фото'  
        variant="filled" 
        helperText='Фото'  
        sx={{mx: 3, width: 300, color: 'gray'}} 
        value={product.image || ''} />
       <TextField
        onChange={handleInp} 
        className='input' 
        name='description'  
        variant="filled" 
        helperText='Описание'  
        sx={{mx: 3, width: 300, color: 'gray'}} 
        value={product.description || ''} />

     </Box>
     <CardActions>
       <Button 
        onClick={() => {
        saveEditedProduct(product, id)
        navigate('/');
                      }}
        fullWidth
        className='btn' 
        sx={{color: 'black', backgroundColor: 'gray'}}>
            Изменить
       </Button>
     </CardActions>
   </Card>
        </>
    );
};

export default EditProduct;