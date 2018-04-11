import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Field = (props) => {
    return (
        <Shape
            type="box"
            width={props.width}
            height="128px"
            depth={props.depth}
            className={`hover-bg-depth-0 margin-top-xs margin-bottom-xs ${props.className} `}
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