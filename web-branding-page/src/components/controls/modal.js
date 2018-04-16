import React from "react"
import Control from "../commons/shape-container"
import IconButton from "../controls/icon-button"
import Article from "../controls/article"

const Modal = (props) => {

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
            <Control width="auto" height="auto" className="bg-depth-1 flex-basis-600 card-5">
                <Control width="auto" height="auto" className="flex-column flex-align-items-flex-stretch padding-xs">
                    <Control width="100%" height="48px" className="flex-row justify-content-flex-end">
                        <IconButton size={48} depth={5} className="" />
                    </Control>
                    <Control width="auto" height="auto" className="padding-xs">
                        <Article />
                    </Control>
                </Control>
            </Control>
        </Control>
    )
}

export default Modal