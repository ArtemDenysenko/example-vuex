const STATE_KEYS = {
    COUNT: 'count',
    USERNAME: 'username',
    SHOW_SPINNER: 'showSpinner',
}

const state = {
    [STATE_KEYS.COUNT]: 0,
    [STATE_KEYS.USERNAME]: 'Default',
    [STATE_KEYS.SHOW_SPINNER]: true,
};

export {
    state,
    STATE_KEYS,
};
