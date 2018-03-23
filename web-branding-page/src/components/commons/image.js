import React from "react"
import PropTypes from "prop-types"
import "./image.styl"

const ShapeImage = (props) => {
    return (
        <div className={`shape-image shape-image-${props.depth}`}>
        </div>
    )
}

ShapeImage.prototype = {
    depth: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
}

ShapeImage.defaultProps = {
    depth: "1",
}

export default ShapeImage