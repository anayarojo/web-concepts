import React from "react"
import PropTypes from "prop-types"
import "./box.styl"

const Box = (props) => {

    const styles = {
        width: props.width,
        height: props.height
    }

    return (
        <div 
            className={`box box-${props.depth}`} 
            style={styles}>
            {props.children}
        </div>
    )
}

Box.prototype = {
    depth: PropTypes.oneOf(["1", "2", "3", "4", "5"]),
    width: PropTypes.string,
    height: PropTypes.string,
}

Box.defaultProps = {
    depth: "1",
    width: "100px",
    height: "100px",
}

export default Box