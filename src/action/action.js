import {
    OBTENER_COINS
} from '../types';

// Muestra alerta

export function actualizarCoinsAction (coins) {
    return (dispatch) => {
        dispatch(actualizarCoins( coins))
    }
}

const actualizarCoins = coins => ({
    type: OBTENER_COINS,
    payload: coins
});

