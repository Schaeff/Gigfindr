import { combineReducers } from 'redux';
import search from './search'
import city from './city'
import gigs from './gigs'
import djs from './djs'

const rootReducer = combineReducers({
	search,
	city,
	gigs,
	djs
});

export default rootReducer;