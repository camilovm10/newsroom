import {
    OBTENER_COINS
} from '../types';

// Cada reducer tiene su state
const initialState = {
    coins: null
}

export default function( state = initialState, action) {
    switch(action.type) {
        case OBTENER_COINS:
            return {
                ...state,
                coins: action.payload
            }
        default:
            return state;
    }
}