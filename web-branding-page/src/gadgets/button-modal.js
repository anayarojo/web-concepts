import React, { Component } from 'react'
import PropTypes from "prop-types"
import Button from "../components/controls/button"
import ModalContainer from "./modal-container"
//import Modal from "./modal"

class ButtonModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    handleToggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <div className="button-modal">
                <Button width="128px" depth={5} onClick={() => this.handleToggleModal()} />
                {this.state.showModal && (
                    <ModalContainer onCloseRequest={() => this.handleToggleModal()}>
                        {this.props.children}
                    </ModalContainer>
                )}
            </div>
        )
    }
}

export default ButtonModal