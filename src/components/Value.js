import React, { Component , PropTypes } from 'react'

const PropTypes={
    number:PropTypes.number
}

const defaultProps={
    number:-1 // 아직 값을 못가져 옴
    
}
export default class Value extends Component {
    render() {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
}
