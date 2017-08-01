import React,{ Component } from 'react';
import store from '../Store.js';
import * as action from './../Actions'

class Counter extends Component {
	static defaultProps = {  
		caption: 'first',  
	}
	constructor(props){
		super(props)
		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onIncrement =  this.onIncrement.bind(this);
		this.onDecrement =  this.onDecrement.bind(this);
		this.state = this.getOwnState();
	}
	shouldComponentUpdate(nextProps, nextState) {
	    return (nextProps.caption !== this.props.caption) ||
	      (nextState.value !== this.state.value);
	}
	componentDidMount() {
	    store.subscribe(this.onChange);
	}
	getOwnState(){
		return{
			value: store.getState()[this.props.caption]
		}
	}
	onChange(){
		this.setState(this.getOwnState())
	}
	onIncrement(){
		store.dispatch(action.increment(this.props.caption))
	}
	onDecrement(){
		store.dispatch(action.decrement(this.props.caption))
	}
	render() {
		const caption = this.props.caption;
		const value = this.state.value
		return (
			<div>
				<button onClick={this.onIncrement}>+</button>
				<button onClick={this.onDecrement}>-</button>
				<span>{caption} count:{value}</span>
			</div>
		)
	}
}

export default Counter;