import Header from './components/Header'
import Search from './components/Search';
import './App.css';
import { Container } from '@mui/material';
import { goods } from './data/goods';
import GoodsList from './components/GoodsList';
import React from 'react';
import Basket from './components/Basket';


const App = () => {
  const [order, setOrder] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [products, setProducts] = React.useState(goods);
  const [isCartOpen, setCartOpen] = React.useState(false);

  return (
    <>
    <Header
      handleCart ={() => setCartOpen(true)}
    />
    <Container
      sx={{mt: '1rem'}}
    >
      <Search/>
      <GoodsList
        goods={products}
      />
    </Container>
    <Basket
      cartOpen={isCartOpen}
      closeCart = {() => setCartOpen(false)}
    />
     
    </>
  );
}

export default App;
