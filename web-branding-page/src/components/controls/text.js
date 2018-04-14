import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Text = (props) => {
    return (
        <Shape
            type="box"
            width={props.width}
            height="16px"
            depth={props.depth}
            className={`margin-top-xs margin-bottom-xs ${props.className}`}
        />
    )
}

Text.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
}

Text.defaultProps = {
    depth: 2,
    width: "100px",
}

export default Text