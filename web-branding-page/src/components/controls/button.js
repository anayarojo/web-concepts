import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Button = (props) => {

    const Styles = {
        display: "block",
        width: props.width,
        height: "64px",
    }

    return (
        <a onClick={props.onClick}>
            <Shape type="box" width={props.width} height="64px" depth={props.depth} className={`hover-card-3 default-transition ${props.className}`} />
        </a>
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