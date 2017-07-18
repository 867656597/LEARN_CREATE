import React from 'react';
import ReactDOM from 'react-dom';

//组件引入
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<CommentInput />
				<CommentList />
			</div>
		)
	}

}

export default CommentApp
