import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'
import Maps from './helpers/maps';

import qs from 'query-string'

import { find } from "../actions"

function mapStateToProps(state) {
	return { ...state.find }
}

class Find extends Component {

	componentDidMount() {
		var filters = qs.parse(this.props.location.search)
		find.setCategory(filters.category)
		window.GetMap({
			center : [51.50632, -0.12714]
		})
	}

	render() {
		return (
			<Grid container direction="column">
				Hello
				<Grid item>
					<div id="showMap" style={{position:'relative', width:'600px', height:'400px'}}></div>
				</Grid>
				{this.props.redirect ? <Redirect to="Error" /> : <Fragment />}
			</Grid>
		)
	}
}

export default connect(mapStateToProps)(Find)