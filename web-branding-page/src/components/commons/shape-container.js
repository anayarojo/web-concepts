import React from "react"
import PropTypes from "prop-types"

const ShapeContainer = (props) => {

    const styles = {
        width: props.width,
        height: props.height
    }

    return (
        <div style={styles} className = {`shape-container ${props.className}`}>
            {props.children}
        </div>
    )
}

ShapeContainer.prototype = {
    width: PropTypes.string,
    height: PropTypes.string,
}

ShapeContainer.defaultProps = {
    width: "100px",
    height: "100px",
}

export default ShapeContainer