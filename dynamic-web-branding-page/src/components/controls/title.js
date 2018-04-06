import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Title = (props) => {
    return (
        <Shape type="box" width={props.width} height="32px" depth={props.depth} className={`${props.className} margin-top-sm margin-bottom-sm`} />
    )
}

Title.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
}

Title.defaultProps = {
    depth: 2,
    width: "100px",
}

export default Title