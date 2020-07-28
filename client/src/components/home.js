import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core'

import Header from './header'
import Content from './content'

function mapStateToProps(state) {
	return {

	}
}

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Grid container direction="column">
					<Grid item>
						<Header />
					</Grid>
					<Grid item>
						<Content />
					</Grid>
				</Grid>
			</Fragment>
		)
	}
}

export default connect(mapStateToProps)(Home)