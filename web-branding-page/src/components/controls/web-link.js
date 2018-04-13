import React from "react"
import PropTypes from "prop-types"
import Text from "../controls/text"

const WebLink = (props) => {

    const Styles = {
        width: "90px",
        height: "16px",
        display: "block",
    }

    return (
        <a href={props.href} style={Styles} className="margin-left-xs margin-right-xs">
            <Text width="90px" depth={3} className={`hover-bg-depth-5`} />
        </a>
    )
}

WebLink.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

WebLink.defaultProps = {
    depth: 2,
    width: "100px",
    className: "",
}

export default WebLink