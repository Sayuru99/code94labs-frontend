import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateProduct from './components/CreateProduct';
import ProductCard from './components/ProductCard';
import ShowProductsList from './components/Products';
import UpdateProduct from './components/UpdateProduct';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Routes>
          <Route exact path='/' element={<ShowProductsList />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/edit-product/:id' element={<UpdateProduct />} />
          <Route path='/show-product/:id' element={<ProductCard />} />
        </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;