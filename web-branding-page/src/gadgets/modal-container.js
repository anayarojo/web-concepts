import React from "react"
import PropTypes from "prop-types"
import Control from "../components/commons/shape-container"
import IconButton from "../components/controls/icon-button"
import Button from "../components/controls/button"
import ModalOverlay from "./modal-overlay"

const ModalContainer = (props) => {

    var modalButtons = []

    for (var i = 0; i < props.buttons; i++) {
        modalButtons.push(<Button onClick={props.onCloseRequest} width="128px" depth={5} className="margin-right-xs" />)
    }

    return (
        <ModalOverlay>
            <Control width="auto" height="auto" className="bg-depth-1 flex-basis-600 card-5">
                <Control width="auto" height="auto" className="flex-column align-items-flex-stretch padding-sm">
                    <Control width="100%" height="48px" className="flex-row justify-content-flex-end">
                        <IconButton onClick={props.onCloseRequest} size={48} depth={5} className="" />
                    </Control>
                    <Control width="auto" height="auto" className="padding-xs">
                        {props.children}
                    </Control>
                    <Control width="100%" height="64px" className="flex-row justify-content-flex-end">
                        {modalButtons}
                    </Control>
                </Control>
            </Control>
        </ModalOverlay>
    )
}

ModalContainer.prototype = {
    buttons: PropTypes.number,
}

ModalContainer.defaultProps = {
    buttons: 1,
}

export default ModalContainer