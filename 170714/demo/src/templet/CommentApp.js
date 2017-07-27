import React from 'react';
// import ReactDOM from 'react-dom';

//组件引入
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentWillMount() {
		this._loadCommentList()
	}
	_saveCommontList(newList) {
		if(newList){
			localStorage.setItem('commentList',JSON.stringify(newList))
		}
	}
	_loadCommentList() {
		let comments = localStorage.getItem('commentList')
		console.log(comments);
	    if (comments) {
	      comments = JSON.parse(comments)
	      this.setState({ list:comments })
	    }
	}
	pushList(addItem) {
		if(!addItem) return false;
		if(!addItem.username) return alert('请输入用户名！');
		if(!addItem.content) return alert('请输入评论');
		var newList = this.state.list.concat([addItem]);
		this.setState({
			list: newList
		})
		this._saveCommontList(newList)
	}
	render() {
		return (
			<div className='wrapper'>
				<CommentInput pushList={this.pushList.bind(this)} />
				<CommentList list={this.state.list} />
			</div>
		)
	}

}

export default CommentApp
