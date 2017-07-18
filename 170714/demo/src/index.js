import React from 'react';
import ReactDOM from 'react-dom';

class CommentApp extends React.Component {
	render() {
		return (
			<div>
				测试
			</div>
		)
	}

}

class CommentInput extends ReactComponent {
	render() {

	}
}


ReactDOM.render(
	<CommentApp />,
	document.getElementById('root')
)