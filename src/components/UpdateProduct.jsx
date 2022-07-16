import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sku: '',
      price: '',
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/products/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, product: res.data})
        this.setState({
          title: res.data.name,
          isbn: res.data.sku,
          author: res.data.price,
        })
      })
      .catch(err => {
        console.log("Error from UpdateProductInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.name,
      isbn: this.state.sku,
      author: this.state.price,
    };

    axios
      .put('http://localhost:8082/api/products/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-product/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateProductInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateProductInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Product List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Product</h1>
              <p className="lead text-center">
                  Update Product's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">name</label>
              <input
                type='text'
                placeholder='Name of the Product'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="sku">SKU</label>
              <input
                type='text'
                placeholder='SKU'
                name='sku'
                className='form-control'
                value={this.state.sku}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="price">Price</label>
              <input
                type='text'
                placeholder='Price'
                name='price'
                className='form-control'
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Product</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateProduct;