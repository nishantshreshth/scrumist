import { combineReducers } from 'redux';

export function items(state = [], action) {
    switch (action.type) {
        case 'INITIAL_DATA':
            return {groups: action.groups, user: action.user};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    items
});

export default rootReducer;
