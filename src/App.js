import Header from './components/Header'
import Search from './components/Search';
import './App.css';
import { Container } from '@mui/material';
import { goods } from './data/goods';
import GoodsList from './components/GoodsList';
import React from 'react';


const App = () => {
  const [order, setOrder] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [products, setProducts] = React.useState(goods);

  return (
    <>
    <Header/>
    <Container
      sx={{mt: '1rem'}}
    >
      <Search/>
      <GoodsList
        goods={products}
      />
    </Container>
        
     
    </>
  );
}

export default App;
