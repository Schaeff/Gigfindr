import { FETCH_GIG, FETCH_GIG_RESULTS } from '../actions/actionConstants'

var initialState = {}

const gigs = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_GIG: {
			const { name } = action.payload

			return {
				...state,
				[name]: {
					loading: true,
					details: ''
				}
			}
		}
		case FETCH_GIG_RESULTS: {
			const { results, name } = action.payload
			
			return {
				...state,
				[name]: {
					loading: false,
					details: results
				}
			}
		}
		default: {
			return state
		}
	}
}

export default gigs