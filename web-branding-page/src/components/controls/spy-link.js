import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"
import * as utility from "../../utilities/windows-utility"
import "../controls/spy-link.styl"

const SpyLink = (props) => {

    const Styles = {
        width: "90px",
        height: "16px",
    }

    return (
        <li className={`spy-link ${props.className}`}>
            <a href={props.href} onClick={(event) => {
                event.preventDefault()
                utility.scrollToSelector(props.href, -64)
            }}>
                <Shape
                type="box"
                width={props.width}
                height="16px"
                depth={props.className ? 5 : 3}
                className={`margin-0`}
            />
            </a>
        </li >
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