import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';
import { Box, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useCart } from '../../context/CartContextProvider'


const Details = () => {

  const { getProductDetails, productDetails, deletedProduct } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

 
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getProductDetails(id);
    }, []);

    return (
        <>
<Card sx={{height:1000, width:1000, backgroundColor:'black', m:'auto' }}>
        <CardMedia
        component="img"
        image={productDetails.image}
        sx={{height: 500}}
        />
         <CardContent>
        <Typography  variant="h5" component="div" sx={{color: 'white', mb: 3, borderBottom: 'white solid 1px'}}>
          {productDetails.name}
        </Typography>
        <Typography  variant="h5" component="div" sx={{color: 'white', mb: 3}}>
          {productDetails.price}$
        </Typography>
        <Typography variant="body2" sx={{color: 'white', mb: 3}}>
        {productDetails.description}
        </Typography>

        
        </CardContent>
        <CardActions sx={{display: 'flex', flexDirection:'column'}}>
           <Box sx={{display: 'flex', justifyContent: 'space-evenly', height: 60, mb: 5, width: 1000}}>
            <Button variant="outlined" sx={{width: 250}} onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
            <Button variant="outlined" sx={{width: 250}} color='error' onClick={() => {
                deletedProduct(id); 
                navigate('/');
            }} >Удалить</Button>

           </Box>
        <Button fullWidth variant="contained" sx={{mx: 5, my: 2, height: 60}} >Купить</Button>
        
        {checkProductInCart(productDetails.id) ? (
                    <Button 
                        fullWidth
                        variant="outlined"
                        onClick={() => {
                          addProductToCart(productDetails)
                          
                        }
                        }
                        sx={{height: 60}}
                    >
                        ALREADY IN BAG
                    </Button>
                ) : (
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => addProductToCart(productDetails)
                        }
                       sx={{height: 60}}
                    >
                        {" "}
                        ADD TO BAG
                    </Button>
                )}
              

      </CardActions>
      </Card>
    

        </>
    );
};

export default Details;
