import { combineReducers } from 'redux';

export function items(state = [], action) {
    switch (action.type) {
        case 'INITIAL_DATA':
            return {groups: action.groups, user: action.user, tasks: action.tasks};
        case 'ADD_SUB_TASK':
                return {...state, tasks: state.tasks.substask.concat(action.subtask)};
        case 'ADD_TASK':
            return {...state, tasks: state.tasks.concat(action.task)};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    items
});

export default rootReducer;
