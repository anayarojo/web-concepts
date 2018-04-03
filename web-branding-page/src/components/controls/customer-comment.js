import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import Text from "../controls/text"
import TextGroup from "../controls/text-group"
import Button from "../controls/button"

const CustomerComment = (props) => {
    return (
        <Control width="auto" height="auto" className={`flex-column align-items-flex-center justify-content-flex-space-around ${props.className}`}>
            <Image type="ball" depth={2} size={64} className="margin-center" />
            <TextGroup depth={1} />
            <Text width="30%" depth={2} className="margin-center" />
        </Control>
    )
}

export default CustomerComment