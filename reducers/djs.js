import {
  FETCH_GIGS_RESULTS,
  FETCH_PLAYLIST_RESULTS
} from '../actions/actionConstants'

var initialState = {}

const djs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIGS_RESULTS: {
      const { results } = action.payload

      const newDjs = Object.assign(
        {},
        ...results
          .map(gig =>
            gig.lineup.map(dj => ({
              [dj.dj]: {
                id: dj.dj,
                soundcloud: dj.soundcloud,
                playlist: []
              }
            }))
          )
          .reduce((a, b) => a.concat(b), [])
      )

      return {
        ...state,
        ...newDjs
      }
    }
    case FETCH_PLAYLIST_RESULTS: {
      const { id, playlist } = action.payload

      return {
        ...state,
        [id]: {
          id: state[id].id,
          soundcloud: state[id].soundcloud,
          playlist
        }
      }
    }
    default: {
      return state
    }
  }
}

export default djs
