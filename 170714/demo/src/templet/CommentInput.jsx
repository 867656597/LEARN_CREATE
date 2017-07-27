import React from 'react';
// import ReactDOM from 'react-dom';


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
	handlerClick() {
		if(this.props.pushList){
			this.props.pushList({
				username: this.state.username,
				content: this.state.content,
				createdTime: +new Date()
			})
		}
		this.setState({
			content: ''
		})
	}
	_saveUserName(username) {
		localStorage.setItem('username',username)
	}
	_loadStorage() {
		const username = localStorage.getItem('username');
		if(username){
			this.setState({
				username: username
			})
		}
	}
	hanlderUserNameBlur(event) {
		this._saveUserName(event.target.value)
	}
	componentWillMount() {
		this._loadStorage()
	}
	componentDidMount() {
		this.textarea.focus();
	}
	render() {
		return (<div className='coment-input'>
					<div className="comment-field">
						<span className='comment-field-name'>用户名:</span>
						<div className = "comment-field-input">
							<input
							onBlur={this.hanlderUserNameBlur.bind(this)}
							onChange={this.handlerUserNameChange.bind(this)}
							value={this.state.username} />
						</div>
					</div>
					<div className="comment-field">
						<span className='comment-field-name'>评论内容:</span>
						<div className = "comment-field-input">
							<textarea
							ref={(textarea) => this.textarea = textarea}
							onChange={this.handlerContentChange.bind(this)}
							value={this.state.content} />
						</div>
					</div>
					<div className='comment-field-button'>
						<button onClick={this.handlerClick.bind(this)}>发布</button>
					</div>
				</div>
				)
	}
}

export default CommentInput