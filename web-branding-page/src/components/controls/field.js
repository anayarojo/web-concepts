import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Field = (props) => {
    return (
        <Shape
            type="box"
            width={props.width}
            height="32px"
            depth={props.depth}
            className={`margin-top-xs margin-bottom-xs ${props.className} `}
        />
    )
}

Field.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

Field.defaultProps = {
    depth: 2,
    width: "100px",
    className: "",
}

export default Field