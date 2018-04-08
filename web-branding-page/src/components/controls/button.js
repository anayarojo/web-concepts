import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Button = (props) => {
    return (
        <Shape type="box" width={props.width} height="64px" depth={props.depth} className={`hover-box-shadow-4 ${props.className}`} />
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