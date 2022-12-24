import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const CardProduct = ({ item }) => {

  

 
    const navigate = useNavigate();
    return (
        
      <Card sx={{height:500, width:350, mt: 5,mx:2, backgroundColor:'black' }}>
        <CardMedia
        component="img"
        image={item.image}
        sx={{height: 200}}
        />
         <CardContent>
        <Typography  variant="h5" component="div" sx={{color: 'white', mb: 3, borderBottom: 'white solid 1px'}}>
          {item.name}
        </Typography>
        <Typography  variant="h5" component="div" sx={{color: 'white', mb: 3}}>
          ${item.price}
        </Typography>
        
        </CardContent>
        <CardActions sx={{display: 'flex', flexDirection:'column'}}>
            <Button variant="outlined" sx={{my: 1, height: 40, width: 300}} onClick={()=> navigate(`/products/${item.id}`)} >Подробнее</Button>
            <Button variant="contained" sx={{my: 1, height: 40, width: 300}} >Купить</Button>
      </CardActions>
      </Card>
    
    );
};

export default CardProduct;
