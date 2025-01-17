'use strict';

Connector.playerSelector = '.player';

Connector.trackSelector = '.now-playing-title';

Connector.artistSelector = '.now-playing-artist';

Connector.currentTimeSelector = '.progress-container .timestamp:first-child';

Connector.durationSelector = '.progress-container .timestamp:last-child';


Connector.getTrackArt = () => {
	const trackArtUrl = Util.extractImageUrlFromSelectors('.now-playing img');

	if (trackArtUrl) {
		return trackArtUrl.replace(/w\d+-h\d+/, 'w300-h300');
	}

	return null;
};


Connector.isPlaying = () => {
	return document.querySelector('.player-btn.player-title svg use').href.baseVal === '/icons.svg#pause';
};
