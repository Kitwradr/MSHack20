import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'
import loadBingApi from './helpers/maps';

import qs from 'query-string'

import { find } from "../actions"

function mapStateToProps(state) {
	return { ...state.find }
}

var Microsoft;

class Find extends Component {
	FetchListItems(){

	}

	GetMap(opts, pins = []) {
		var map = new Microsoft.Maps.Map('#showMap', opts);

		for (var i = 0; i < pins.length; i++) {
			map.entities.push(pins[i]);
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

		loadBingApi()
			.then(() => {
				Microsoft = window.Microsoft

				var location = new window.Microsoft.Maps.Location(51.50632, -0.12714)

				find.setUserLocation(location)

				var pin = this.CreatePins(this.props.userLocation, {
					text: 'Me'
				})

				find.addPin(pin)				
				
				this.GetMap({
					center: this.props.userLocation
				}, this.props.pins)

			})
	}


	render() {
		return (
			<Grid container direction="column">
				<Grid item>
					<div id="showMap" style={{ position: 'relative', width: '600px', height: '400px' }}></div>
				</Grid>
				{this.props.redirect ? <Redirect to="Error" /> : <Fragment />}
			</Grid>
		)
	}
}

export default connect(mapStateToProps)(Find)