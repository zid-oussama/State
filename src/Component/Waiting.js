import React from 'react'
import './Waiting.css'

class Waiting extends React.Component {
    render() {
        return (
            <div className="loading">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>

        )
    }
}

export default Waiting