import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { useProducts } from '../../context/ProductContextProvider';
import { useSearch } from '../../context/SearchContextProvider';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function Navbar() {

  const { count } = useProducts()

  const { setSearch } = useSearch()

  


  return (


    <Box className='navbar' sx={{height: '90px', display:'flex', alignItems:'center', margin: 'auto'}} >
      <AppBar position="static" sx={{ backgroundColor:'rgb(26, 25, 25)', height:'90px'  }}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          
          <Box sx={{display: 'flex', height: '90px', alignItems: 'center'}}>
          <Search sx={{borderRadius: '20px', height: '40px'} }>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Искать в магазине"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearch(e.target.value) }
            />
          </Search>
            <Typography noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              
              
              letterSpacing: '.3rem',
              color: 'gray',
              textDecoration: 'none',
            }}  className='Typography' >Главное</Typography>
          </Box>
          <Box sx={{display: 'flex'}}>
            <Badge color="primary" badgeContent={count}>
            <Typography noWrap
            component="a"
            href="/buy"
            sx={{
              mr: 2,
              
           
              letterSpacing: '.3rem',
              color: 'gray',
              textDecoration: 'none',
            }} className='Typography'
            >Корзина</Typography>
            </Badge>
          </Box>
          
          
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}