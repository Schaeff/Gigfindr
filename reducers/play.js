import { HOLD_GIG, RELEASE_GIG } from '../actions/actionConstants'

var initialState = {
  state: 'off',
  gigId: 0
}

const play = (state = initialState, action) => {
  switch (action.type) {
    case HOLD_GIG: {
      const { gigId } = action.payload
      return {
        gigId,
        state: 'loading'
      }
    }
    case RELEASE_GIG: {
      const { gigId } = action.payload

      return {
        gigId, // keep the gig id for resume play
        state: 'off'
      }
    }
    default: {
      return state
    }
  }
}

export default play
