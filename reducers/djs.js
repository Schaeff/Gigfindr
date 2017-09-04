import {
	FETCH_GIGS_RESULTS
} from '../actions/actionConstants'

var initialState = {}

const djs = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_GIGS_RESULTS:
			{
				const {
					results
				} = action.payload

				const newDjs = Object.assign({}, ...results.map(gig =>
					gig.lineup.map(dj =>
						({
							[dj.dj]: {
								id: dj.dj,
								soundcloud: dj.soundcloud
							}
						})
					)
				).reduce((a, b) => a.concat(b), []))

				return {
					...state,
					...newDjs
				}
			}
		default:
			{
				return state
			}
	}
}

export default djs