import { combineReducers } from 'redux';
import search from './search'
import city from './city'
import gigs from './gigs'

const rootReducer = combineReducers({
	search,
	city,
	gigs
});

export default rootReducer;