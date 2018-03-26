import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"

const Logo = (props) => {
    return (
        <ShapeContainer width="210px" height="64px" className="flex-row align-items-flex-center justify-content-flex-space-between">
            <Shape type="ball" width="48px" height="48px" className="bg-depth-2" />
            <Shape type="box" width="150px" height="32px" className="bg-depth-2" />
        </ShapeContainer>
    )
}

export default Logo