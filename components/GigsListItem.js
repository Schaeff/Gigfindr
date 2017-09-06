import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';
import { getPlaylist } from '../selectors'

import Video from 'react-native-video';

import {
	ListItem
} from 'react-native-elements'

import {
	View
} from 'react-native'


const streamUrl = 'https://api.soundcloud.com/tracks/63256906/stream?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z';

const GigsListItem = (props) => {
	const {
		gig,
		gigs,
		play,
		playlist
	} = props;

	const toPlay = playlist.length > 0 ? playlist[0] : streamUrl

	const playing =
		play.state === 'loading' && play.gigId === gig.gigId

	const title = playing ? ['Playing from', playlist.length, 'sources'].join(' ') : gigs[gig.gigId].title

	return <View>
		<ListItem title={title} onPressOut={onReleasePress(props)} onLongPress={onLongPress(props)}/>
		<Video source={{uri: toPlay }}
			   volume={1.0}
			   muted={false}
			   paused={!playing}
			   playInBackground={true}
			   playWhenInactive={true}
			   resizeMode="cover"
			   repeat={false}/>
	</View>
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