import { FETCH_GIGS, FETCH_GIGS_RESULTS } from '../actions/actionConstants'

var initialState = {}

const city = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_GIGS: {
			const { id } = action.payload

			return {
				...state,
				[id]: {
					loading: true,
					gigs: []
				}
			}
		}
		case FETCH_GIGS_RESULTS: {
			const { results, id } = action.payload
			
			return {
				...state,
				[id]: {
					loading: false,
					gigs: results
				}
			}
		}
		default: {
			return state
		}
	}
}

export default city