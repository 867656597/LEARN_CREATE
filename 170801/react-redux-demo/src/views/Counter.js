import React, { Component } from 'react';
import Store from './../Store';
import * as Action from './../Actions';
import { connect } from 'react-redux';


//傻瓜组件

class Counter extends Component {
  render() {
    const {caption, onIncrement, onDecrement, value} = this.props;

    return (
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
	return {
		value: state[ownProps.caption]
	}
}

function mapDispatchToprops(dispatch,ownProps){
	return {
		onIncrement: () => {
			dispatch(Action.increment(ownProps.caption))
		},
		onDecrement: () => {
			dispatch(Action.decrement(ownProps.caption))
		},
	}
}


// class CounterContainer extends Component{
// 	constructor(props){
// 		super(props);
// 		this.getOwnState = this.getOwnState.bind(this);
// 		this.onChange = this.onChange.bind(this);
// 		this.onIncrement = this.onIncrement.bind(this);
// 		this.onDecrement = this.onDecrement.bind(this);
// 		this.state = {
// 			value: this.getOwnState()
// 		}
// 	}
// 	componentDidMount(){
// 		Store.subscribe(this.onChange)
// 	}

// 	getOwnState() {
// 		return Store.getState()[this.props.caption]
// 	}
// 	onChange(){
// 		this.setState({
// 			value: this.getOwnState()
// 		})
// 	}
// 	onIncrement() {
// 		Store.dispatch(Action.increment(this.props.caption))
// 	}
// 	onDecrement() {
// 		Store.dispatch(Action.decrement(this.props.caption))
// 	}
// 	render(){
// 		return <Counter caption={this.props.caption}
// 		       onIncrement={this.onIncrement}
// 		       onDecrement={this.onDecrement}
// 		       value={this.state.value} />
// 	}
// }

const CounterContainer = connect(mapStateToProps,mapDispatchToprops)(Counter)
export default CounterContainer