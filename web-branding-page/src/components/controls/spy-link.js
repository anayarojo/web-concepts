import React from "react"
import PropTypes from "prop-types"
import Shape from "../commons/shape"
import "../controls/spy-link.styl"

const SpyLink = (props) => {

    const ScrollToSection = (event) => {
        event.preventDefault()
        const id = event.target.parentNode.getAttribute("href").replace("#", "")
        const section = document.getElementById(id)
        const bound = section.getBoundingClientRect();
        window.scrollBy({ top: bound.top - 64, left: 0, behavior: 'smooth' });
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