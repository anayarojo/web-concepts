import React from "react"
import Control from "../components/commons/shape-container"

const ModalOverlay = (props) => {

    const styles = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1000",
        overflowY: "auto",
        overflowX: "hidden",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.4)"
    }

    return (
        <Control styles={styles}>
            {props.children}
        </Control>
    )
}

export default ModalOverlay