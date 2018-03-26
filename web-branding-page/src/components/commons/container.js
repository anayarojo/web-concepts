import React from "react"
import PropTypes from "prop-types"
import "./container.styl"

const Container = (props) => {
    return (
        <div className = {`container ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container