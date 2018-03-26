import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Button = (props) => {
    return (
        <Shape type="box" width={props.lenght} height="32px" className={`bg-depth-${props.depth} ${props.className}`} />
    )
}

Button.prototype = {
    depth: PropTypes.number,
    lenght: PropTypes.string,
    className: PropTypes.string,
}

Button.defaultProps = {
    depth: 2,
    width: "100px",
    className: "",
}

export default Button