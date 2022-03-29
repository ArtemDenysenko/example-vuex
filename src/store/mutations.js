import { STATE_KEYS } from './state';

const MUTATIONS = {
    INCREMENT: 'increment',
    CHANGE_NAME: 'changeName',
    SWITCH_SPINNER: 'switchSpinner',
};

const mutations = {
    [MUTATIONS.INCREMENT] (state) {
        console.log('mutation used');
        state[STATE_KEYS.COUNT] = state[STATE_KEYS.COUNT] + 1;
    },
    [MUTATIONS.CHANGE_NAME] (state, name) {
        state[STATE_KEYS.USERNAME] = name;
    },
    [MUTATIONS.SWITCH_SPINNER] (state) {
        state[STATE_KEYS.SHOW_SPINNER] = !state[STATE_KEYS.SHOW_SPINNER];
    },
}

export {
    mutations,
    MUTATIONS,
}