import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"

const Image = (props) => {
    return (
        <Shape type={props.type} width={`${props.size}px`} height={`${props.size}px`} depth={props.depth} className={`${props.className}`} />
    )
}

Image.prototype = {
    type: PropTypes.oneOf(["box", "ball", "triangle"]),
    depth: PropTypes.number,
    size: PropTypes.number,
    className: PropTypes.string,
}

Image.defaultProps = {
    type: "box",
    depth: 2,
    size: 100,
    className: "",
}

export default Image