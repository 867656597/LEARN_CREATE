import React from 'react';
import ReactDOM from 'react-dom';

//组件引入
import Comment from './Comment'


class CommentList extends React.Component {
	render() {
		return (<div>
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</div>)
	}
}

export default CommentList
