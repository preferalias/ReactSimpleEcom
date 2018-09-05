import { SIGN_IN, SIGN_OUT} from '../actions/types'

const initialState = {
    error: {},
    message: {},
    isAuthenticated: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                message : action.payload,
                error : action.error,
                isAuthenticated: action.error ? false : true,
            };
        case SIGN_OUT:
            return {
              ...state,
              message : action.payload,
              error : action.error,
              isAuthenticated: false,
            }
        default: 
            return state
    }
}