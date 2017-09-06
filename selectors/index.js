export const getPlaylist = state => {
  const {
    db,
    play
  } = state
  const {
    gigs,
    djs
  } = db

  if(play.gigId === 0) return []

  return gigs[play.gigId].lineup
    .map(dj => djs[dj.djId].playlist[0])
    .filter(s => s !== null)
}