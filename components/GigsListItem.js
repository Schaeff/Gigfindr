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
		gigs
	} = props;
	
	return <ListItem title={gigs[gig.gigId].title} onPressOut={onReleasePress(props)} onLongPress={onLongPress(props)}/>
}

const onLongPress = props => () => {
	const {
		gig,
		onHoldGig
	} = props
	return onHoldGig(gig.event)
}

const onReleasePress = props => () => {
	const {
		gig,
		onReleaseGig
	} = props
	return onReleaseGig(gig.event)
}

const mapStateToProps = state => ({
	gigs: state.gigs
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigsListItem)