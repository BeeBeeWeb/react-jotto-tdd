import { combineReducers } from 'redux';

import successReducer from './success.reducer';

const rootReducer = combineReducers({
    success: successReducer
});

export default rootReducer;