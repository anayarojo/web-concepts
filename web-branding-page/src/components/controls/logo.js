import React from "react"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import Title from "../controls/title"

const Logo = (props) => {
    return (
        <Control width="210px" height="64px" className="flex-row align-items-flex-center">
            <Image type="ball" depth={4} size="48px" className="margin-right-xs" />
            <Title lenght="150px" depth={4} className="height-md" />
        </Control>
    )
}

export default Logo