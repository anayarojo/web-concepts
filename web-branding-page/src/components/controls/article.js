import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Title from "./title"
import Text from "./text"

const Article = (props) => {
    return (
        <Control className="flex-column align-items-flex-stretch padding-xs">
            <Title depth={props.titleDepth} />
            <Text with="100%" depth={props.textDepth} />
            <Text with="100%" depth={props.textDepth} />
            <Text with="100%" depth={props.textDepth} />
            <Text with="70%" depth={props.textDepth} />
            <Text with="50%" depth={props.textDepth} />
        </Control>
    )
}

Article.prototype = {
    titleDepth: PropTypes.number,
    textDepth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

Article.defaultProps = {
    titleDepth: 3,
    textDepth: 2,
    width: "300px",
    className: "",
}

export default Article