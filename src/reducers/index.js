import { combineReducers } from 'redux';
import { players } from './players';
import { heros } from './heros';




const rootReducer = combineReducers({
    players,
    heros
});
export default rootReducer;