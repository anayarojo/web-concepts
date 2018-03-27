import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Text = (props) => {
    return (
        <Shape type="box" width={props.lenght} height="14px" className={`bg-depth-${props.depth} ${props.className} margin-top-xs margin-bottom-xs`} />
    )
}

Text.prototype = {
    depth: PropTypes.number,
    lenght: PropTypes.string,
}

Text.defaultProps = {
    depth: 2,
    lenght: "100px",
}

export default Text