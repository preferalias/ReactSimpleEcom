import React, { Component } from 'react';

class AddProduct extends Component {
  state = {
    name: '',
    price: 0
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onCreate = (e) => {
    e.preventDefault()
    const { onCreate } = this.props
    onCreate(this.state.name, this.state.price)
  }
  render() { 
    const { name, price } = this.state

    return ( 
      <form>
        <h3>Add Product here !!</h3>
        <input 
          value={name}
          name="name"
          onChange={this.onChange}
          placeholder="name"></input>
        <input 
          type="number"
          min="0"
          value={price}
          name="price"
          onChange={this.onChange}
          placeholder="price"></input>
        <button onClick={this.onCreate}>Add</button>
      </form>
    );
  }
}
 
export default AddProduct;

