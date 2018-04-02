import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Image from "../controls/image"
import Title from "../controls/title"
import Text from "../controls/text"
import TextGroup from "../controls/text-group"
import Button from "../controls/button"

const Plan = (props) => {
    return (
        <Control width="auto" height="auto" className={`flex-column align-items-flex-center justify-content-flex-space-around bg-depth-0 padding-sm ${props.className}`}>
            <Title width="70%" depth={2} className="margin-center" />
            <Text width="30%" depth={1} className="margin-center" />
            <Image type="ball" depth={1} size="150px" className="margin-center" />
            <TextGroup size={2} depth={1} />
            <Button depth={2} className="margin-center"  />
        </Control>
    )
}

export default Plan