import { FETCH_PRODUCTS , UPDATE_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT} from '../actions/types'

const initialState = {
    items: [],
    item: {},
    message: '',
    error: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items : action.payload,
                error : action.error
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                message: action.message,
                error: action.error,
                items: [...state.items, action.payload]
            }
        case DELETE_PRODUCT:
            const newState = state.items.filter(({ id }) => id !== action.payload)
            return {
                ...state,
                message : action.message,
                error : action.error,
                items : action.error ? state.items : newState 
            }
        case UPDATE_PRODUCT:
            const updatedState = state.items.map(product => (
                product.id === action.payload.id
                    ? action.payload
                    : product
            ))
            return {
                ...state,
                message : action.message,
                error : action.error,
                items : action.error ? state.items : updatedState
            }
        default: 
            return state
    }
}