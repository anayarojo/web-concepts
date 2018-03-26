import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"

const WebNavigation = (props) => {
    return (
        <ShapeContainer width="500px" height="64px" className={`flex-row align-items-flex-center ${props.className}`}>
            {
                props.menu.map((index, item) => {
                    return (
                        <Shape type="box" width="90px" height="16px" className="bg-depth-2 margin-left-xs margin-right-xs" />
                    )
                })
            }
        </ShapeContainer>
    )
}

export default WebNavigation