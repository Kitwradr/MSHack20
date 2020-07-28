var Microsoft

export default function loadBingApi() {
	const callbackName = "GetMap";
	let url = "http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AoUmJwkCEO-LcuZPDFTJQrxCWMp6su1ujEntp66HHnL_TZpQWxGl1MoiHAGwzWVi"

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

// export default class maps extends Component {
// 	componentDidMount() {
// 		loadBingApi().then(() => {
// 			this.initMap();
// 		});
// 	}

// 	initMap() {
// 		const map = new Microsoft.Maps.Map('#map');
// 		if (this.props.mapOptions) {
// 			map.setOptions(this.props.mapOptions);
// 		}
// 		return map;
// 	}

// 	render() {
// 		return <div id="map" />;
// 	}
// }
