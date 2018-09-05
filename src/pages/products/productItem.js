import React, { Component } from 'react';
import {ProductSpan, ItemWrapper} from '../../elements/productElements'

class ProductItem extends Component {
  state = {
    isEdit: false,
    name: this.props.name,
    price: this.props.price 
  }

  onEdit = () => {
    this.setState({isEdit : true})
  }

  cancelEdit = () => {
    this.setState({isEdit : false})
  }

  onDelete = () => {
    const { onDelete, id } = this.props
    onDelete(id)
  }

  onUpdate = () => {
    const { onUpdate, id } = this.props
    const { name, price } = this.state
    onUpdate(id, name, price)
    this.cancelEdit()
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }
  render() { 
    const { name, price } = this.props
    return ( 
      <div>
        { this.state.isEdit
          ? (
            <ItemWrapper>
              <input 
                value={this.state.name}
                name="name"
                onChange={this.onChange}
                placeholder="name"></input>
              <input 
                type="number"
                min="0"
                value={this.state.price}
                name="price"
                onChange={this.onChange}
                placeholder="price"></input>
              <button onClick={this.onUpdate}>Edit</button>
              <button onClick={this.cancelEdit}>Cancel</button>
            </ItemWrapper>
          )
          : (
            <ItemWrapper>
              <ProductSpan alignLeft>{name}</ProductSpan>
              <ProductSpan>{price}</ProductSpan>
              <button onClick={this.onEdit}>Edit</button>
              <button onClick={this.onDelete}>Delete</button>
            </ItemWrapper>
          )
        }
      </div>
     );
  }
}
 
export default ProductItem;