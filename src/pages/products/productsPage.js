import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct, createProduct, updateProduct } from "../../actions/productActions";
import Title from "../../elements/title"
import ProductItem from './productItem'
import AddProduct from './addProduct'

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  onDelete = (id) => {
    this.props.deleteProduct(id)
  }

  onUpdate = (id, name, price) => {
    console.log(id + name + price)
    this.props.updateProduct(id,name,price)
  }

  onCreate = (name, price) => {
    console.log(name + price)
    this.props.createProduct(name, price)
  }


  render() {
    const productItems = this.props.products.map(product => (
      <ProductItem 
        key={product.id}
        {...product}
        onUpdate={this.onUpdate}
        onDelete={this.onDelete}>
      </ProductItem>
    ))

    return (
      <div>
        <h2>Products</h2>
        <AddProduct onCreate={this.onCreate}></AddProduct>
        <hr />
        <Title>Products List</Title>
          {productItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  error: state.products.error
});

export default connect( mapStateToProps, { fetchProducts, deleteProduct, createProduct, updateProduct})(Products);
