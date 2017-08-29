import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';

import {
	ListItem
} from 'react-native-elements'

const GigsListItem = (props) => {
	const {
		name,
		fetchGigAsync,
		navigation
	} = props;
	const { navigate } = navigation

	return <ListItem title={name} onPress={() => { fetchGigAsync(name); return navigate('Gig', { id: name })} }/>
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigsListItem)