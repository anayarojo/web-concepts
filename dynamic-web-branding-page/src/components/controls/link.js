import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Link = (props) => {
    return (
        <Shape
            type="box"
            width={props.width}
            height="16px"
            depth={props.depth}
            className={`margin-top-xs margin-bottom-xs ${props.className} `}
        />
    )
}

Link.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

Link.defaultProps = {
    depth: 2,
    width: "100px",
    className: "",
}

export default Link