import React from "react"
import PropTypes from "prop-types"
import Control from "../commons/shape-container"
import Title from "../controls/title"
import Text from "../controls/text"
import Field from "../controls/field"
import TextArea from "../controls/text-area"
import Button from "../controls/button"

const ContactForm = (props) => {
    return (
        <Control width="100%" height="auto" className="flex-column align-items-flex-stretch">
            <Title width={props.titleWidth} depth={props.titleDepth} />
            <Text width="100px" depth={3} />
            <Field width="95%" depth={1} />
            <Text width="100px" depth={3} />
            <Field width="95%" depth={1} />
            <Text width="100px" depth={3} />
            <TextArea width="95%" depth={1} />
            <Button width="128px" depth={5} />
        </Control>
    )
}

export default ContactForm