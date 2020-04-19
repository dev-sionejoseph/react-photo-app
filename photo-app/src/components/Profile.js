import React, { Component } from 'react'
import Timeline from './Timeline'

export default class Profile extends Component {
    render() {
        return (
            <div className="profileWrap">
                <div className="topHalfWrap">
                    <div className="profileImageWrap">
                        <img className="profileImage" src="#"/> 
                        {/* profile image will be the most like image */}
                    </div>
                    <div className="userProfileDetails">
                        {/* this will detail how many like they have, how many photos they've posted, etc */}
                    </div>
                </div>
                <div className="bottomHalfWrap">
                    <Timeline />
                </div>

            </div>
        )
    }
}
