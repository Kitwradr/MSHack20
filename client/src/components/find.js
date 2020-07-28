import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import qs from 'query-string'

import { find } from "../actions"

function mapStateToProps(state) {
	return { ...state.find }
}

class Find extends Component {

	componentDidMount() {
		var filters = qs.parse(this.props.location.search)
		find.setCategory(filters.category)
	}

	render() {
		return (
			<div>
				{this.props.redirect ? <Redirect to="Error" /> : <Fragment />}
			</div>
		)
	}
}


import { connect } from 'react-redux';

export default connect(mapStateToProps)(Find)