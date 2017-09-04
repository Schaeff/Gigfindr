import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';
import { getPlaylist } from '../selectors'


import {
	ListItem
} from 'react-native-elements'

const GigsListItem = (props) => {
	const {
		gig,
		gigs,
		play,
		playlist
	} = props;

	const title =
		play.state === 'loading' && play.gigId === gig.gigId ?
		['Playing from', playlist.length, 'sources'].join(' ') : gigs[gig.gigId].title
	
	return <ListItem title={title} onPressOut={onReleasePress(props)} onLongPress={onLongPress(props)}/>
}

const onLongPress = props => () => {
	const {
		gig,
		onHoldGig
	} = props
	return onHoldGig(gig.gigId)
}

const onReleasePress = props => () => {
	const {
		gig,
		onReleaseGig
	} = props
	return onReleaseGig(gig.gigId)
}

const mapStateToProps = state => ({
	gigs: state.db.gigs,
	play: state.play,
	playlist: getPlaylist(state)
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigsListItem)