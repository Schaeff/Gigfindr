import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actions/actionCreators'
import { getPlaylist } from '../selectors'

import Video from 'react-native-video'

import { ListItem } from 'react-native-elements'
import { View } from 'react-native'

const GigsListItem = props => {
  const { gig, gigs, play, playlist } = props

  const requiresPlayer = playlist.length > 0

  if (!requiresPlayer) {
    return (
      <View>
        <ListItem
          onLongPress={onLongPress(props)}
          onPressOut={onReleasePress(props)}
          title={gigs[gig.gigId].title}
        />
      </View>
    )
  }

  const toPlay = playlist[0]

  const playing = play.state === 'loading' && play.gigId === gig.gigId

  const title = playing
    ? ['Playing from', playlist.length, 'sources'].join(' ')
    : gigs[gig.gigId].title

  return (
    <View>
      <ListItem
        onLongPress={onLongPress(props)}
        onPressOut={onReleasePress(props)}
        title={title}
      />
      <Video
        muted={false}
        paused={!playing}
        playInBackground
        playWhenInactive
        repeat={false}
        resizeMode="cover"
        source={{ uri: toPlay }}
        volume={1.0}
      />
    </View>
  )
}

const onLongPress = props => () => {
  const { gig, onHoldGig } = props
  return onHoldGig(gig.gigId)
}

const onReleasePress = props => () => {
  const { gig, onReleaseGig } = props
  return onReleaseGig(gig.gigId)
}

const mapStateToProps = state => ({
  gigs: state.db.gigs,
  play: state.play,
  playlist: getPlaylist(state)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GigsListItem)
