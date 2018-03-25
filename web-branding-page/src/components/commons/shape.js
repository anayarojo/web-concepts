import React from "react"
import PropTypes from "prop-types"
import "./shape.styl"

const Shape = (props) => {

    const Styles = {
        width: props.size,
        height: props.size
    }

    return (
        <div 
            style={Styles}
            className={`shape shape-${props.depth} shape-${props.type}`}>
        </div>
    )
}

Shape.prototype = {
    type: PropTypes.oneOf(["box", "ball"]),
    depth: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    size: PropTypes.string,
}

Shape.defaultProps = {
    type: "box",
    depth: "1",
    size: "100px",
}

export default Shape