import React, { Component } from 'react';
import { connect } from 'react-redux' 

class Summary extends Component{
	render() {
		const { countSumNumber } = this.props
		return (
			<div>countSumNumber: { countSumNumber }</div>
		)
	}
}

function countSum(state) {
	var sum = 0;
	console.log(state)
	for(const key in state){
		sum += state[key]
	}
	return sum;
}

function mapStateToTrops(state,ownProps) {
	return {
		countSumNumber: countSum(state)
	}
}

export default connect(mapStateToTrops)(Summary)