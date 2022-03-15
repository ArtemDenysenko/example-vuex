import {MUTATIONS} from "./mutations";

const ACTIONS = {
    INCREMENT_CLICKED: 'incrementClicked',
    SWITCH_SPINNER_ASYNC: 'switchSpinnerAsync',
}

const actions = {
    incrementClicked(context) {
        context.commit(MUTATIONS.INCREMENT);
    },
    switchSpinnerAsync({commit}, payload) {
        setTimeout(() => {
            commit(MUTATIONS.SWITCH_SPINNER);
        }, payload.seconds * 1000)
    }
};

export {
    actions,
    ACTIONS,
}