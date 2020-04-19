import React, { Component } from 'react'
import Comment from './Comment'

export default class AddComment extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          submitted: false,
          currentComment: '',
          comments:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {

        this.setState({
            currentComment: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState({
            comments:[this.state.currentComment, this.state.comments],
            submitted: true
        })

    }  

    render() {
        return (
            <div id="commentSectionWrap">
                <div id="addCommentWrap">
                    <label id="commentLabel">Add a Comment:</label>
                    <textarea id="commentInput" placeholder="Write your message here" onChange={this.handleChange} value={this.state.currentComment}/>
                    <button type="submit" onClick={this.handleSubmit}></button>
                </div>
                <div id="commentViewerWrap">
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>

        )
    }
}
