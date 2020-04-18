import React, { Component } from 'react'

class Photo extends Component {
    render() {
        return (
            <div id="photoTile">
                <img alt={this.props.caption} src={this.props.image}/>
            </div>
        )
    }
}

export default Photo;