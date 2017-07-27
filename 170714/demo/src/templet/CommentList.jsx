import React from 'react';
// import ReactDOM from 'react-dom';

//组件引入
import Comment from './Comment'


class CommentList extends React.Component {
	static defaultProps = {
	    list: []
	}
	constructor() {
		super();
	}
	render() {
		// console.log(this.props.list)
		return (
			<div>{this.props.list.map(function(item,index,arr){
				return (<div key={index}><Comment comment={item} /></div>)
			})}</div>
		)
	}
}

export default CommentList
