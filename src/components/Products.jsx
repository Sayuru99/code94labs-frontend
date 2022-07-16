import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from './Navbar';

class ShowProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/products')
      .then(res => {
        this.setState({
            products: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowProductsList');
      })
  };


  render() {
    const products = this.state.products;
    console.log("PrintProduct: " + products);
    let productsList;

    if(!products) {
        productsList = "there is no product record!";
    } else {
        productsList = products.map((product, k) =>
        <ProductCard product={product} key={k} />
      );
    }

    return (
      <>
      <div className="ShowProductsList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-left font-weight-bold">PRODUCTS</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-product" className="btn btn-outline-warning float-right">
                + Add New Product
              </Link>
              <br />
              <br />
            </div>
          </div>
           {/* creating table */}
          <table class="table custom-table">
            <thead className='thead-primary'>
            <tr>
                <th scope="col" className='th'>SKU</th>
                <th scope="col" className='th'>IMAGE</th>
                <th scope="col" className='th'>PRODUCT NAME</th>
                <th scope="col" className='th'>PRICE</th>
                <th scope="col" className='th'></th>
            </tr>
            </thead>
                {productsList}
            </table>
          </div>
      </div>
      </>
    );
  }
}

export default ShowProductsList;