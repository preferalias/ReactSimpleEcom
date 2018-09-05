import { FETCH_PRODUCTS , DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT} from './types'

export const fetchProducts = () => dispatch => {
  fetch('http://localhost:5000/api/product/get')
    .then(res => res.json())
    .then(data => 
      dispatch({
        type: FETCH_PRODUCTS,
        payload : data.data,
        error : data.error 
    })
  );
};

export const createProduct = (name,price) => dispatch => {
  fetch('http://localhost:5000/api/product/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      price: price
    }) 
    }) 
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_PRODUCT,
        payload: data.data,
        message: data.message,
        error: data.error
      })
    )
}

export const updateProduct = (id, name, price) => dispatch => {
  fetch('http://localhost:5000/api/product/update/' + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      price: price
    }) 
    }) 
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: UPDATE_PRODUCT,
        message: data.message,
        error: data.error,
        payload: {
          id: id,
          name: name,
          price:price
        }
      })
    )
}

export const deleteProduct = (id) => dispatch => {
  fetch('http://localhost:5000/api/product/delete/' + id, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }})
  .then(res => res.json())
  .then(data =>
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
      error: data.error,
      message: data.message
    })
  )
}