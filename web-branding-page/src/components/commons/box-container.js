import React from "react"
import PropTypes from "prop-types"
import "./box-container.styl"

const BoxContainer = (props) => {

    const styles = {
        width: props.width,
        height: props.height
    }

    return (
        <div style={styles} className = {`box-container box-container-${props.depth} box-container-type-${props.type} box-container-padding-${props.padding} box-container-align-${props.align} box-container-justify-${props.justify}`}>
            {props.children}
        </div>
    )
}

BoxContainer.prototype = {
    depth: PropTypes.oneOf(["0", "1", "2", "3", "4", "5"]),
    type: PropTypes.oneOf(["row", "column"]),
    padding: PropTypes.oneOf(["lg", "md", "sm", "xs", "0"]),
    align: PropTypes.oneOf(["flex-start", "flex-end", "center", "baseline", "stretch"]),
    justify: PropTypes.oneOf(["flex-start", "flex-end", "center", "space-between", "space-around", "inherit"]),
    width: PropTypes.string,
    height: PropTypes.string,
}

BoxContainer.defaultProps = {
    depth: "0",
    type: "column",
    align: "flex-start",
    justify: "inherit",
    padding: "0",
    width: "100px",
    height: "100px",
}

export default BoxContainer