export const ACTIONS_ADULT = {
    INCREMENT_ADULT: 'increment_adult',
    DECREMENT_ADULT: 'decrement_adult',
    RESET_ADULT: 'reset_adult',
}
export const ACTIONS_CHILD = {
    INCREMENT_CHILD: 'increment_child',
    DECREMENT_CHILD: 'decrement_child',
    RESET_CHILD: 'reset_child',
}

export default function guestAdultReducer(state, action) {
    switch (action.type) {
        case ACTIONS_ADULT.INCREMENT_ADULT:
            return state + action.payload;
        case ACTIONS_ADULT.DECREMENT_ADULT:
            if (state < 1) {
                return state = 0;
            } else {
                return state - action.payload;
            }
        default:
            return state;
    }
}
export function guestChildReducer(state, action) {
    switch (action.type) {
        case ACTIONS_CHILD.INCREMENT_CHILD:
            return state + action.payload;
        case ACTIONS_CHILD.DECREMENT_CHILD:
            if (state < 1) {
                return state = 0;
            } else {
                return state - action.payload;
            }
        default:
            return state;
    }
}

