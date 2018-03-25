import React from "react"
import PropTypes from "prop-types"
import "./container.styl"

const Container = (props) => {
    return (
        <div className = {`container container-type-${props.type} container-padding-${props.padding} container-align-${props.align} container-justify-${props.justify}`}>
            {props.children}
        </div>
    )
}

Container.prototype = {
    type: PropTypes.oneOf(["row", "column"]),
    padding: PropTypes.oneOf(["lg", "md", "sm", "xs", "0"]),
    align: PropTypes.oneOf(["flex-start", "flex-end", "center", "baseline", "stretch"]),
    justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "inherit"]),
}

Container.defaultProps = {
    type: "column",
    align: "flex-start",
    justify: "inherit",
    padding: "0",
}

export default Container