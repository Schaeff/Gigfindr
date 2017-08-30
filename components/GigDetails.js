import React from 'react';

import {
	Text
} from 'react-native'

const GigDetails = (props) => {
	const {
		id,
		gig
	} = props;

	return <Text>{JSON.stringify(id)}</Text>
}

export default GigDetails