import React, { Component } from 'react';
import Counter from './Counter'

class ControlPanel extends Component {
	render() {
		return (
			<div>
				<Counter caption='First' />
				<Counter caption='Second' />
				<Counter caption='Third' />
			</div>
		)
	}
}


export default ControlPanel