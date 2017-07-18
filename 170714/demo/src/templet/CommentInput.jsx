import React from 'react';
import ReactDOM from 'react-dom';


class CommentInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			content: ''
		}
	}
	handlerUserNameChange(event) {
		this.setState({
	      username: event.target.value
	    })
	}
	handlerContentChange(event) {
		this.setState({
			content: event.target.value
		})
	}
	render() {
		return (<div className='coment-input'>
					<div className="comment-field">
						<span className='comment-field-name'>用户名:</span>
						<div className = "comment-field-input">
							<input 
							onChange={this.handlerUserNameChange.bind(this)}
							value={this.state.username} />
						</div>
					</div>
					<div className="comment-field">
						<span className='comment-field-name'>评论内容:</span>
						<div className = "comment-field-input">
							<textarea 
							onChange={this.handlerContentChange.bind(this)}
							value={this.state.content} />
						</div>
					</div>
					<div className='comment-field-button'>
						<button>发布</button>
					</div>
				</div>
				)
	}
}

export default CommentInput