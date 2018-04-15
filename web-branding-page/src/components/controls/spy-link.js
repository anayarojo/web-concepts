import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"
import * as Win from "../../utilities/windows-utility"
import "../controls/spy-link.styl"

const SpyLink = (props) => {

    const ScrollToSection = (event) => {
        event.preventDefault()
        const id = event.target.parentNode.getAttribute("href").replace("#", "")
        const section = document.getElementById(id)
        Win.scrollTo(section, 64);
    }

    const Styles =  {
        width: "90px",
        height: "16px",
    }

    return (
        <li className={`spy-link ${props.className}`}>
            <a href={props.href} onClick={ScrollToSection}>
                <Shape
                    type="box"
                    width={props.width}
                    height="16px"
                    depth={props.className? 5 : 3}
                    className={`margin-0`}
                />
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