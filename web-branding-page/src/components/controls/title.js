import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"

const Title = (props) => {
    return (
        <Shape type="box" width={props.lenght} height="20px" className={`bg-depth-${props.depth} ${props.className}`} />
    )
}

Title.prototype = {
    depth: PropTypes.number,
    lenght: PropTypes.string,
    className: PropTypes.string,
}

Title.defaultProps = {
    depth: 2,
    lenght: "100px",
    className: "",
}

export default Title