import { Container, Box, Typography, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useCart } from '../../context/CartContextProvider';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Buy = (  ) => {
    const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem('cart');
    getCart();
  };
  const navigate = useNavigate();

    return (
        <div>
            <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'space-between', height: 850}}>
                <Box sx={{width: 1000, backgroundColor: '#3F3C3C'}}>
                    <Typography variant="h2" sx={{backgroundColor:'#2C2929', color: 'whitesmoke', pl: 4, py: 3}}>Моя корзина</Typography>

                   <Box sx={{display:'flex', flexWrap:'wrap',width:900, height: 700, mx:2}}>
                   {cart.products.map((row, i) => (
                        <Card sx={{height:300, width:250, mt: 5, backgroundColor:'black', mx:2 }} key={i}>
                        <CardMedia
                        component="img"
                        image={row.item.image}
                        sx={{height: 150}}
                        onClick={() =>
                            navigate(`/products/${row.item.id}`)
                        }
                        />
                        <Typography sx={{color: 'white', textAlign: 'center', my: 2, borderBottom: '1px solid white', pb: 2}}>{row.item.name}</Typography>
                        <Button 
                          color="error"
                          fullWidth 
                          variant="outlined"
                          sx={{my: 1}}
                          onClick={() => deleteCartProduct(row.item.id)}
                        >Delete</Button>
                      </Card>
                    ))}
                   </Box>


                </Box>
                <Box sx={{width: 300, backgroundColor: '#3F3C3C'}}>
                    <Typography variant="h5" sx={{backgroundColor:'#2C2929', color: 'whitesmoke', py: 10, textAlign:'center'}}>Все игры и приложения</Typography>

                        <Box>
                            <Box sx={{borderBottom: '1px solid white', mx: 2}}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between',  py: 5}}>
                                    <Typography>Цена</Typography>
                                    <Typography>{cart.totalPrice}$</Typography>
                                </Box>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', py: 5}}>
                                    <Typography>Скидка</Typography>
                                    <Typography>-00.00$</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', py: 5, mx: 2}}> 
                                <Typography>Итог</Typography>
                                <Typography>{cart.totalPrice}$</Typography>
                            </Box>
                            <Button  variant="contained" sx={{width:300,height: 60}}>Оформить заказ</Button>
                        </Box>

                </Box>
            </Container>
            
        </div>
    );
};

export default Buy;