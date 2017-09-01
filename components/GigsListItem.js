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
		fetchGigAsync,
		navigation
	} = props;
	const { navigate } = navigation

	return <ListItem title={gig.title} onPress={() => { fetchGigAsync(gig.event.url); return navigate('Gig', { id: gig.lineup })} }/>
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigsListItem)