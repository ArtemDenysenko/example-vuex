import { STATE_KEYS } from './state';

const getters = {
    spinnerLabel(state) {
        return state[STATE_KEYS.SHOW_SPINNER] ? 'Hide' : 'Show';
    },
}

export {
    getters,
}