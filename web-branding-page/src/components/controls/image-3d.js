import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Image from "../controls/image"

const Image3d = (props) => {
    return (
        <Control width={props.size} height={props.size} className={props.className}>
            <Image type={props.type} depth={props.depth} size={`calc(${props.size} - 16px)`} className="margin-0" />
            <Image type={props.type} depth={props.depth+1} size={`calc(${props.size} - 16px)`} className="margin-top-xs margin-left-xs" />
        </Control>
    )
}

Image3d.prototype = {
    type: PropTypes.oneOf(["box", "ball", "triangle"]),
    depth: PropTypes.number,
    size: PropTypes.string,
    className: PropTypes.string,
}

Image3d.defaultProps = {
    type: "box",
    depth: 2,
    size: "100px",
    className: "",
}

export default Image3d