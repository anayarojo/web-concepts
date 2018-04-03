import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import "./image-3d.styl"

const Image3d = (props) => {
    return (
        <Control width={`${props.size}px`} height={`${props.size}px`} className={`image-3d ${props.className}`}>
            <Image type={props.type} depth={props.depth} size={(props.size - (16 * props.size / 100))} className="image-red" />
            <Image type={props.type} depth={props.depth + 1} size={(props.size - (16 * props.size / 100))} className="image-blue" />
        </Control>
    )
}

Image3d.prototype = {
    type: PropTypes.oneOf(["box", "ball", "triangle"]),
    depth: PropTypes.number,
    size: PropTypes.number,
    className: PropTypes.string,
}

Image3d.defaultProps = {
    type: "box",
    depth: 2,
    size: 100,
    className: "",
}

export default Image3d