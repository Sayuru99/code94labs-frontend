import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      sku:'',
      price:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      sku: this.state.sku,
      price: this.state.price
    };

    axios
      .post('http://localhost:8082/api/products', data)
      .then(res => {
        this.setState({
            name: '',
            sku:'',
            price:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateProduct!");
      })
  };

  render() {
    return (
      <div className="CreateProduct">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Product</h1>
              <p className="lead text-center">
                  Create new product
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='sku'
                    name='sku'
                    className='form-control'
                    value={this.state.sku}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Price'
                    name='price'
                    className='form-control'
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;