import React from "react"
import Control from "../commons/shape-container"
import Text from "../controls/text"

const WebNavigation = (props) => {
    return (
        <Control width="500px" height="64px" className={`flex-row align-items-flex-center ${props.className}`}>
            {
                props.menu.map((index, item) => {
                    return (
                        <Text key={index} width="90px" depth={3} className="margin-left-xs margin-right-xs" />
                    )
                })
            }
        </Control>
    )
}

export default WebNavigation