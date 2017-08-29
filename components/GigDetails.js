import React from 'react';

import {
	Text
} from 'react-native'

const GigDetails = (props) => {
	const {
		id,
		gig
	} = props;

	return <Text>{gig.details}</Text>
}

export default GigDetails