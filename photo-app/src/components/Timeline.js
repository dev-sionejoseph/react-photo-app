import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div className="mainTimelineWrap">
                <div className="timelinephotosWrap">
                    {/* will populate this div with photos posted by friends, or personal photos; testing with instances of Photo component */}
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                </div>
            </div>
        )
    }
}
