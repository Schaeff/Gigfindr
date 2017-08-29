import { SEARCH, SEARCH_RESULTS, FETCH_GIGS, FETCH_GIGS_RESULTS, FETCH_GIG, FETCH_GIG_RESULTS } from './actionConstants';
Promise = require('bluebird')

export const search = text => ({
	type: SEARCH,
	payload: {
		text
	}
})

export const searchResults = results => ({
	type: SEARCH_RESULTS,
	payload: {
		results
	}
})

export const searchAsync = text => dispatch => {
	dispatch(search(text))
	return API.fetchPlaces(text).then(places => dispatch(searchResults(places)))
}

export const fetchGigs = id => ({
	type: FETCH_GIGS,
	payload: {
		id
	}
})

export const fetchGigsAsync = id => dispatch => {
	dispatch(fetchGigs(id))
	return API.fetchGigs(id).then(gigs => dispatch(fetchGigsResults(id, gigs)))
}

export const fetchGigsResults = (id, results) => ({
	type: FETCH_GIGS_RESULTS,
	payload: {
		results,
		id
	}
})

export const fetchGig = name => ({
  type: FETCH_GIG,
  payload: {
    name
  }
})

export const fetchGigAsync = name => dispatch => {
  dispatch(fetchGig(name))
  return API.fetchGig(name).then(details => dispatch(fetchGigResults(name, details)))
}

export const fetchGigResults = (name, results) => ({
  type: FETCH_GIG_RESULTS,
  payload: {
    results,
    name
  }
})

const API = {
	fetchPlaces: text => Promise.delay(500).then(() => Object.keys(PLACES).map(key => PLACES[key]).filter(p => p.name.indexOf(text.toLowerCase()) > -1)),
	fetchGigs: id => Promise.delay(500).then(() => ([{name: 'John Doe'}, {name: 'Bob'}])),
  fetchGig: name => Promise.delay(500).then(() => "blahblah")
}

const PLACES = {
	34: {
		name: "berlin",
		id: 34
	},
	36: {
		name: "kualalumpur",
		id: 36
	},
	35: {
		name: "northernireland",
		id: 35
	}
}