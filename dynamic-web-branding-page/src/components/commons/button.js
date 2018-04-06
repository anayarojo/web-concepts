import React from "react"
import PropTypes from "prop-types"
import Shape from "../base/shape"
import "./button.styl"

const Button = (props) => {
    return (
        <Shape type="box" width={props.width} height="64px" depth={props.depth} className={`button ${props.className}`}>
            Button
        </Shape>
    )
}

Button.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

Button.defaultProps = {
    depth: 2,
    width: "128px",
    className: "",
}

export default Button