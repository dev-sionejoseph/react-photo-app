import React, { Component } from 'react'

export default class UserActions extends Component {
    constructor(props) {
        super(props);
        
        this.colorArray = ['white', 'blue', 'purple'] 
    
        this.state = {
          color: this.colorArray[0],
          liked: false,
          favorited: false 
        }
        
        this.onLike = this.onLike.bind(this);
        this.onFavorite = this.onFavorite.bind(this);
      }
    
    onLike (e) {
        this.setState({
            liked: this.state.liked = true ? this.state.liked = false : this.state.liked = true,
            color: this.state.color = this.colorArray[0] ? this.state.color = this.colorArray[2] : this.state.color = this.colorArray[0],
        })
    }
    
    onFavorite (e) {
        this.setState({
            liked: this.state.favorited = false ? this.state.favorited = true : this.state.favorited = false,
            color: this.state.color = this.colorArray[0] ? this.state.color = this.colorArray[1] : this.state.color = this.colorArray[0],
        })
    }
    
    render() {
        return (
            <div>
                <button id="likeButton" onClick={this.onLike}></button>
                <button id="favoriteButton" onClick={this.onFavorite}></button>
            </div>
        )
    }
}

