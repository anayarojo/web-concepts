import React from "react"
import PropTypes from "prop-types"
import "./shape.styl"

const Shape = (props) => {

    const Styles = props.type != "triangle" ? {
        width: props.width,
        height: props.height,
    }:
    {
        width: 0,
        height: 0,
        borderLeftWidth: props.height,
        borderRightWidth: props.height,
        borderButtomWidth: props.width,
    }

    return (
        <div 
            className={`shape shape-${props.type} shape-depth-${props.depth} ${props.className}`}
            style={Styles}>
        </div>
    )
}

Shape.prototype = {
    type: PropTypes.oneOf(["box", "ball", "triangle"]),
    depth: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    width: PropTypes.string,
    height: PropTypes.string,
}

Shape.defaultProps = {
    type: "box",
    depth: "1",
    width: "100px",
    height: "100px",
}

export default Shape