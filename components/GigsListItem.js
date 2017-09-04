import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';

import {
	ListItem
} from 'react-native-elements'

const GigsListItem = (props) => {
	const {
		gig,
		gigs,
		play
	} = props;

	const title = play.state === 'loading' && play.gigId === gig.gigId ? "PLAY!" : gigs[gig.gigId].title
	
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
	play: state.play
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigsListItem)