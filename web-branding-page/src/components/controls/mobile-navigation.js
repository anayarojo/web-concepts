import React from "react"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import Text from "../controls/text"

const MobileNavigation = (props) => {
    return (
        <Control width="64px" height="64px" className={`flex-row align-items-flex-center flex-wrap ${props.className}`}>
            <Image type="ball" depth={4} size={48} className="hover-bg-depth-5" />
        </Control>
    )
}

export default MobileNavigation