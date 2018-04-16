import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Title from "../controls/title"
import TextGrup from "../controls/text-group"
import Button from "../controls/button"

const Article = (props) => {
    return (
        <Control width="100%" height="auto" className="flex-column align-items-flex-stretch">
            <Title width={props.titleWidth} depth={props.titleDepth} />
            <TextGrup depth={props.textDepth} size={props.textSize} />
            <Control width="100%" height="auto" className="flex-row justify-content-flex-start">
                <Button width="128px" depth={5} className="" />
            </Control>
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