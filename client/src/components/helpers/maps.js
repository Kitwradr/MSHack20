import React, { Component } from 'react'

var Microsoft

function loadBingApi(key) {
	const callbackName = "GetMap";
	let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callbackName}`;
	if (key) {
		url += `&key=${key}`;
	}

	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.defer = true;
		script.src = url;
		Window[callbackName] = () => {
			Microsoft = window.Microsoft;
			resolve();
		};
		script.onerror = (error) => {
			reject(error);
		};
		document.body.appendChild(script);
	});
}

export default class maps extends Component {
	componentDidMount() {
		loadBingApi().then(() => {
			this.initMap();
		});
	}

	initMap() {
		const map = new Microsoft.Maps.Map('#map');
		if (this.props.mapOptions) {
			map.setOptions(this.props.mapOptions);
		}
		return map;
	}

	render() {
		return <div id="map" />;
	}
}
