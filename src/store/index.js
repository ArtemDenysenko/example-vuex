import { createStore } from 'vuex'
import { state } from './state';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';

// Create a new store instance.
const store = createStore({
    state () {
        return state;
    },
    mutations,
    getters,
    actions,
});

export {
    store,
}