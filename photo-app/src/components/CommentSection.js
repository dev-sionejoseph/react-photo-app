import React, { Component } from 'react'

export default class AddComment extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          submitted: false,
          currentComment: '',
          comments:[],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {

        this.setState({
            [currentComment]: event.target.value,
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
            <div id="addCommentWrap">
                <label id="commentLabel">Add a Comment:</label>
                <textarea id="commentInput" placeholder="Write your message here" value={this.state.currentComment}/>
                <button type="submit" onClick={handleSubmit}></button>
            </div>
        )
    }
}
