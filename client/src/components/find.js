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

class Find extends Component {

	async componentDidMount() {
		var filters = qs.parse(this.props.location.search)
		find.setCategory(filters.category)

		try {	
			await loadBingApi()
			var Microsoft = window.Microsoft
		}
		catch(e){
			find.setCategory("Error")
		}
		// if (window.Microsoft) {

		// 	var location = window.createLocation(51.50632, -0.12714)

		// 	var pins = []

		// 	var pin = window.createPins(location, {
		// 		text: '1'
		// 	})

		// 	pins.push(pin)

		// 	window.GetMap({
		// 		center: location
		// 	}, pins)
		// }
	}

	render() {
		return (
			<Grid container direction="column">
				Hello
				<Grid item>
					<div id="showMap" style={{ position: 'relative', width: '600px', height: '400px' }}></div>
				</Grid>
				{this.props.redirect ? <Redirect to="Error" /> : <Fragment />}
			</Grid>
		)
	}
}

export default connect(mapStateToProps)(Find)