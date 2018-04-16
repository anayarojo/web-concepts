import React from "react"
import Control from "../commons/shape-container"
import Article from "../controls/article"

const Modal = (props) => {
    return (
        <Control width="100%" height="100%" className="flex-column align-items-flex-center justify-self-flex-center position-absolute bg-depth-0.30">
            <Control width="auto" height="400px" className="bg-depth-1 flex-base-400">
                <Article titleWidth="40%" titleDepth={3} textDepth={2}  />
            </Control>
        </Control>
    )
}

export default Modal