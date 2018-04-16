import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const IconButton = (props) => {

    const style = {
        display: "block",
        width: `${props.size}px`,
        height: `${props.size}px`,
    }

    return (
        <a onClick={props.onClick} style={style} className={`display-block ${props.className}`}>
            <Shape type="ball" width={`${props.size}px`} height={`${props.size}px`} depth={props.depth} className={`hover-card-3 default-transition ${props.className}`} />
        </a>
    )
}

IconButton.prototype = {
    depth: PropTypes.number,
    size: PropTypes.number,
    className: PropTypes.string,
}

IconButton.defaultProps = {
    depth: 2,
    size: 64,
    className: "",
}

export default IconButton