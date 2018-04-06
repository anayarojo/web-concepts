import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import Image3d from "../controls/image-3d"
import Article from "../controls/article"

const Feacture = (props) => {
    return (
        <Control width="100%" height="auto" className={`flex-column align-items-flex-center justify-content-flex-center ${props.className}`}>
            <Image3d type="ball" size={100} depth={props.depth} className="margin-center" />
            <Article titleDepth={props.depth} textDepth={props.depth-1} />
        </Control>
    )
}

export default Feacture