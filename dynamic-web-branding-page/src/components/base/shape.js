import React from "react"
import PropTypes from "prop-types"
import "./shape.styl"

const Shape = (props) => {

    const Styles = props.type != "triangle" ? {
        width: props.width,
        height: props.height,
    } :
        {
            width: 0,
            height: 0,
            borderLeftWidth: `calc(${props.height}/2)`,
            borderRightWidth: `calc(${props.height}/2)`,
            borderBottomWidth: props.width,
        }

    return (
        <div className={`shape shape-${props.type} shape-depth-${props.depth} ${props.className}`}
            style={Styles}>
            {props.children}
        </div>
    )
}

Shape.prototype = {
    type: PropTypes.oneOf(["box", "ball", "triangle"]),
    depth: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
}

Shape.defaultProps = {
    type: "box",
    depth: "1",
    width: "100px",
    height: "100px",
    className: "",
}

export default Shape