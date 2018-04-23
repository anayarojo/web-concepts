import React, { Component } from 'react'
import PropTypes from "prop-types"
import InjectSheet from 'react-jss'
import Styles from "./buttom-modal-styles"
import ModalBox from "./modal"

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
        const { children, sheet: { classes } } = this.props
        const { showModal } = this.state

        return (
            <div>
                <button
                    type="button"
                    className={classes.modalButton}
                    onClick={() => this.handleToggleModal()}
                >
                </button>

                {showModal &&
                    <ModalBox onCloseRequest={() => this.handleToggleModal()}>
                        {children}
                    </ModalBox>}
            </div>
        )
    }
}

ButtonModal.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    sheet: PropTypes.object,
    classes: PropTypes.object,
}

export default InjectSheet(Styles)(ButtonModal)