import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider.js';
import './Admin.css';
 

export default function Admin() {

   const { addProduct } = useProducts()

  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
  });

  const handleInp = (e) => {
   
        let obj = { ...product, [e.target.name]: e.target.value };
        setProduct(obj);
  
};

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', backgroundColor:'whitesmoke', my: 5 }}>
     
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">Добавить игру</Typography>
      </CardContent>
      <Box>
        <TextField onChange={handleInp} className='input' name='name' placeholder='На Англ'  variant="filled" helperText="Название игры"  sx={{mx: 3, width: 300, color: 'gray'}}/>
        <TextField onChange={handleInp} className='input' name='price' placeholder='Цена в $'  variant="filled" helperText='Цена'  sx={{mx: 3, width: 300, color: 'gray'}}/>
        <TextField onChange={handleInp} className='input' name='image' placeholder='Ссылка на Фото'  variant="filled" helperText='Фото'  sx={{mx: 3, width: 300, color: 'gray'}}/>
        <TextField onChange={handleInp} className='input' name='description'  variant="filled" helperText='Описание'  sx={{mx: 3, width: 300, color: 'gray'}}/>

      </Box>
      <CardActions>
        <Button onClick={() => {
                        addProduct(product);
                        navigate('/');
                        }}
                        fullWidth
                        className='btn' 
                        sx={{color: 'black', backgroundColor: 'gray'}}
                        >
                          Save
          </Button>
      </CardActions>
    </Card>
  );
}