import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Title from "./title"
import Text from "./text"

const TextGroup = (props) => {

    var result = []

    for(var i = 0; i < props.size; i++){
        result.push(
            <Control width="100%" height="auto" className={`flex-column align-items-flex-stretch margin-top-sm margin-bottom-sm ${props.className}`}>
                <Text lenght="100%" depth={props.depth} />
                <Text lenght="100%" depth={props.depth} />
                <Text lenght="100%" depth={props.depth} />
                <Text lenght="70%" depth={props.depth} />
                <Text lenght="50%" depth={props.depth} />
            </Control>
        )
    }

    return result
}

TextGroup.prototype = {
    depth: PropTypes.number,
    size: PropTypes.number,
}

TextGroup.defaultProps = {
    depth: 2,
    size: 1
}

export default TextGroup