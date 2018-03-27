import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Title from "../controls/title"
import TextGrup from "../controls/text-group"
import Button from "../controls/button"

const Article = (props) => {
    return (
        <Control width="100%" height="auto" className="flex-column align-items-flex-stretch padding-xs">
            <Title width={props.titleWidth} depth={props.titleDepth} />
            <TextGrup depth={props.textDepth} size={props.textSize} />
            <Button width="100px" depth="5" />
        </Control>
    )
}

Article.prototype = {
    titleDepth: PropTypes.number,
    textDepth: PropTypes.number,
    titleWidth: PropTypes.string,
    textSize: PropTypes.number,
}

Article.defaultProps = {
    titleDepth: 3,
    textDepth: 2,
    titleWidth: "300px",
    textSize: 1,
}

export default Article