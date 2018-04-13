import React from "react"
import PropTypes from "prop-types"
import Text from "../controls/text"
import "../controls/spy-link.styl"

const SpyLink = (props) => {

    return (
        <li className="spy-link">
            <a href={props.href}>
                <Text width="90px" depth={3} className={`hover-bg-depth-5`} />
            </a>
        </li>
    )
}

SpyLink.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

SpyLink.defaultProps = {
    depth: 2,
    width: "100px",
    className: "",
}

export default SpyLink