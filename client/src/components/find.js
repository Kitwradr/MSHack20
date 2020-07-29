import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

import { Grid, Paper, Typography, Box } from '@material-ui/core'

import qs from 'query-string'

import ListItems from './list'

import loadBingApi from './helpers/maps';

import { find } from "../actions"

import { httpGet } from "../methods/axios"

function mapStateToProps(state) {
	return { ...state.find }
}

var Microsoft, directionsManager;

var resp = {
	"authenticationResultCode": "ValidCredentials",
	"brandLogoUri": "http://dev.virtualearth.net/Branding/logo_powered_by.png",
	"copyright": "Copyright \u00a9 2020 Microsoft and its suppliers. All rights reserved. This API cannot be accessed and the content and any results may not be used, reproduced or transmitted in any manner without express written permission from Microsoft Corporation.",
	"resourceSets": [
		{
			"estimatedTotal": 10,
			"resources": [
				{
					"Address": {
						"addressLine": "600 Pine St",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "600 Pine St, Seattle, WA, 98101",
						"locality": "Seattle",
						"postalCode": "98101"
					},
					"PhoneNumber": "(206) 405-2655",
					"Website": "https://www.pacificplaceseattle.com/",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.612815856933594,
								-122.3353042602539
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Pacific Place",
					"point": {
						"coordinates": [
							47.612815856933594,
							-122.3353042602539
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "10600 Quil Ceda Blvd",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "10600 Quil Ceda Blvd, Tulalip, WA, 98271",
						"locality": "Tulalip",
						"postalCode": "98271"
					},
					"PhoneNumber": "(360) 654-3000",
					"Website": "https://www.premiumoutlets.com/outlet/seattle",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								48.09354782104492,
								-122.18826293945312
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Seattle Premium Outlets",
					"point": {
						"coordinates": [
							48.09354782104492,
							-122.18826293945312
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "575 Bellevue Sq",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "575 Bellevue Sq, Bellevue, WA, 98004",
						"locality": "Bellevue",
						"postalCode": "98004"
					},
					"PhoneNumber": "(425) 646-3660",
					"Website": "https://bellevuecollection.com/",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.615570068359375,
								-122.20218658447266
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Bellevue Square",
					"point": {
						"coordinates": [
							47.615570068359375,
							-122.20218658447266
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "400 Pine Street",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "400 Pine Street, Seattle, WA, 98101",
						"locality": "Seattle",
						"postalCode": "98101"
					},
					"PhoneNumber": "(206) 467-1600",
					"Website": "https://www.westlakecenter.com/en.html?cmpid=lc_yext_yext_other_o_none&utm_medium=local&utm_source=other&utm_content=none",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.61201477050781,
								-122.33735656738281
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Westlake Center",
					"point": {
						"coordinates": [
							47.61201477050781,
							-122.33735656738281
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "2623 NE University Village St Ste 7",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "2623 NE University Village St Ste 7, Seattle, WA, 98105",
						"locality": "Seattle",
						"postalCode": "98105"
					},
					"PhoneNumber": "(206) 523-0622",
					"Website": "http://uvillage.com/",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.66263198852539,
								-122.29878997802734
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "University Village Shopping Center",
					"point": {
						"coordinates": [
							47.66328811645508,
							-122.29973602294922
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "1527 Melrose Ave",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "1527 Melrose Ave, Seattle, WA, 98122",
						"locality": "Seattle",
						"postalCode": "98122"
					},
					"PhoneNumber": "(503) 603-4741",
					"Website": "http://melrosemarketseattle.com/",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.61470031738281,
								-122.32815551757812
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Melrose Market",
					"point": {
						"coordinates": [
							47.61470031738281,
							-122.32815551757812
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "3000 184th St SW",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "3000 184th St SW, Lynnwood, WA, 98037",
						"locality": "Lynnwood",
						"postalCode": "98037"
					},
					"PhoneNumber": "(425) 778-7675",
					"Website": "https://www.alderwoodmall.com/en.html?cmpid=lc_yext_yext_other_o_none&utm_medium=local&utm_source=other&utm_content=none",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.829708099365234,
								-122.27249145507812
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Alderwood",
					"point": {
						"coordinates": [
							47.829708099365234,
							-122.27249145507812
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "1420 5th Ave Ste 450",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "1420 5th Ave Ste 450, Seattle, WA, 98101",
						"locality": "Seattle",
						"postalCode": "98101"
					},
					"PhoneNumber": "(206) 624-8800",
					"Website": null,
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.6104850769043,
								-122.33458709716797
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "City Centre",
					"point": {
						"coordinates": [
							47.6102294921875,
							-122.33519744873047
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "1815 N 45th St",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "1815 N 45th St, Seattle, WA, 98103",
						"locality": "Seattle",
						"postalCode": "98103"
					},
					"PhoneNumber": "(206) 634-1000",
					"Website": "https://wallingfordcenter.com/location/tweedy-popp-hardware/",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.66096496582031,
								-122.33570098876953
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "Wallingford Center",
					"point": {
						"coordinates": [
							47.661380767822266,
							-122.33570861816406
						],
						"type": "Point"
					}
				},
				{
					"Address": {
						"addressLine": "2623 NE University Village St",
						"adminDistrict": "WA",
						"countryRegion": "US",
						"formattedAddress": "2623 NE University Village St, Seattle, WA, 98105",
						"locality": "Seattle",
						"postalCode": "98105"
					},
					"PhoneNumber": "(206) 523-0622",
					"Website": "https://uvillage.com/",
					"__type": "SearchResult:http://schemas.microsoft.com/search/local/ws/rest/v1",
					"entityType": "LocalBusiness",
					"geocodePoints": [
						{
							"calculationMethod": "Rooftop",
							"coordinates": [
								47.66270065307617,
								-122.29850769042969
							],
							"type": "Point",
							"usageTypes": [
								"Display"
							]
						}
					],
					"name": "University Village",
					"point": {
						"coordinates": [
							47.66270065307617,
							-122.29850769042969
						],
						"type": "Point"
					}
				}
			]
		}
	],
	"statusCode": 200,
	"statusDescription": "OK",
	"traceId": "e09e4719ba5440d19f38edfdc4e1c85d|CH00001608|0.0.0.0"
}


class Find extends Component {
	FetchListItems() {
		for (var i = 0; i < resp.resourceSets[0].resources.length; ++i) {
			var location = new window.Microsoft.Maps.Location(resp.resourceSets[0].resources[i].point.coordinates[0], resp.resourceSets[0].resources[i].point.coordinates[1])

			find.addPlace({
				name: resp.resourceSets[0].resources[i].name,
				location: location,
				phoneNumber: resp.resourceSets[0].resources[i].PhoneNumber,
				index: i + 1
			})

			var pin = this.CreatePins(location, {
				text: (i + 1) + ""
			})

			find.addPin(pin)
		}

		this.GetMap({
			center: this.props.userLocation
		}, this.props.pins)
	}

	GetMap(opts, pins = []) {
		var map = new Microsoft.Maps.Map('#showMap', opts);

		for (var i = 0; i < pins.length; i++) {
			map.entities.push(pins[i]);
		}
		
		if (this.props.destination) {
			Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
				//Create an instance of the directions manager.
				directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

				//Create waypoints to route between.
				var seattleWaypoint = new Microsoft.Maps.Directions.Waypoint({location: this.props.userLocation});
				directionsManager.addWaypoint(seattleWaypoint);

				var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ location: this.props.destination});
				directionsManager.addWaypoint(workWaypoint);

				//Specify the element in which the itinerary will be rendered.
				directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

				//Calculate directions.
				directionsManager.calculateDirections();
			});
		}
	}

	CreateLocation(lat, lon) {
		return new Microsoft.Maps.Location(lat, lon)
	}

	CreatePins(location, opts) {
		return new Microsoft.Maps.Pushpin(location, opts);
	}

	componentDidMount() {
		var filters = qs.parse(this.props.location.search)
		find.setCategory(filters.category)

		window.httpGet = httpGet

		loadBingApi()
			.then(() => {
				Microsoft = window.Microsoft

				var location = new window.Microsoft.Maps.Location(47.602038, -122.333964)

				find.setUserLocation(location)

				var pin = this.CreatePins(this.props.userLocation, {
					text: 'Me'
				})

				find.addPin(pin)

				this.FetchListItems()

				this.GetMap({
					center: this.props.userLocation
				}, this.props.pins)

			})
	}


	render() {
		if(this.props.updateMap){
			this.GetMap({
				center: this.props.userLocation
			}, this.props.pins)

			find.resetUpdateMap()
		}
		return (
			<Grid container direction="column">
				<Grid item>
					<Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
						<Box p={1}>
							<Typography variant="h4" align="justify">Here are our top picks</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item>
					<Paper id="showMap" style={{ position: 'relative', minWidth: "100px", width: '80vw', height: '60vh', margin: 'auto', marginTop: "10px", maxHeight: "400px" }} />
				</Grid>
				<Grid item>
					<ListItems items={this.props.places} />
				</Grid>
				{this.props.redirect ? <Redirect to="Error" /> : <Fragment />}
			</Grid>
		)
	}
}

export default connect(mapStateToProps)(Find)