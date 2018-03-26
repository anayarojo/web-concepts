import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"

const Image = (props) => {
    return (
        <Shape type={props.type} width={props.size} height={props.size} className={`bg-depth-${props.depth} ${props.className}`} />
    )
}

Image.prototype = {
    type: PropTypes.oneOf(["box", "ball", "triangle"]),
    depth: PropTypes.number,
    size: PropTypes.string,
    className: PropTypes.string,
}

Image.defaultProps = {
    type: "box",
    depth: 2,
    size: "100px",
    className: "",
}

export default Image