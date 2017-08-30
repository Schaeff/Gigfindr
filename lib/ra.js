import cheerio from 'cheerio-without-node-native'

const RA_BASE = 'https://www.residentadvisor.net'
const SC_BASE = 'https://soundcloud.com'

export const getCityEvents = cityCode => fetch("https://www.residentadvisor.net/events.aspx?ai=" + cityCode).then(res => res.text()).then(body => {
	var $ = cheerio.load(body);
	var gigs = $('#items > li > article > div > h1 > a').toArray()
	var links = gigs.filter((a, i) => i < 2).map(gig => {
			return {
				id: gig.attribs.href.split('aspx?')[1],
				url: RA_BASE + gig.attribs.href
			}
		})
		

	var _lineups = Promise.all(links.map(getEventLineup))
	return _lineups
})

export const getEventLineup = event => fetch(event.url).then(res => res.text()).then(body => {
	var $ = cheerio.load(body)
	var lineup = $('.lineup')
	var _soundcloudURLS = Promise.all(lineup.find('a').toArray()
		.map(dj => RA_BASE + dj.attribs.href)
		.map(getDJSoundcloudURL)
	)

	return _soundcloudURLS.then(urls => ({
		event: event,
		lineup: urls.filter(a => a !== null)
	}))
})

export const getDJSoundcloudURL = dj => fetch(dj).then(res => res.text()).then(body => {
	var $ = cheerio.load(body)
	var djURIArray = $('#SoundcloudPlaceholder').toArray()
	if (djURIArray.length === 0) return null;
	return SC_BASE + '/' + djURIArray[0].attribs['data-soundcloud-username']
})


