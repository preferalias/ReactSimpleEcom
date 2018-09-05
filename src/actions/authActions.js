import { SIGN_IN, SIGN_OUT} from './types'

export const getAuthen = (user,pass) => dispatch => {
  fetch('http://localhost:5000/signin',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: user,
      password: pass 
    })
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      dispatch({
        type: SIGN_IN,
        payload : data.message,
        error : data.error 
    })
    }
  );
};

export const logOut = () => dispatch => {
  dispatch({
    type: SIGN_OUT,
    payload: 'Logged out',
    error: false
  })
}