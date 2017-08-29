import React from 'react';
import { Text } from 'react-native'
import { List } from 'react-native-elements'
import GigsListItem from './GigsListItem'

const GigsList = (props) => {
	const { id, city, navigation } = props;
	const { loading, gigs } = city;

	if(loading) {
		return <Text>Loading</Text>
	}

	return <List>
		{ gigs.map((g,i) => <GigsListItem key={i} name={g.name} navigation={navigation}/>) }
	</List>
}

export default GigsList