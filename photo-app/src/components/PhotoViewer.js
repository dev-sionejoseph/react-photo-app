import React, { Component } from 'react'
import Photo from './Photo'
import UserActions from './UserActions'

export default class PhotoViewer extends Component {
    render() {
        return (
            <div id="activePhotoWrap">
                <Photo />
                <UserActions />
            </div>
        )
    }
}

