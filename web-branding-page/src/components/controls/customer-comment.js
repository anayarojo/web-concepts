import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Title from "../controls/title"
import Text from "../controls/text"
import TextGroup from "../controls/text-group"
import Button from "../controls/button"

const CustomerComment = (props) => {
    return (
        <Control width="auto" height="auto" className={`flex-column align-items-flex-center justify-content-flex-space-around bg-depth-0 padding-sm ${props.className}`}>
            <Title width="70%" depth={2} className="margin-center" />
            <TextGroup depth={1} />
            <Text width="30%" depth={1} className="margin-center" />
        </Control>
    )
}

export default CustomerComment