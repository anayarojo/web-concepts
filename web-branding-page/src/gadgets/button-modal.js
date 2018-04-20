import React, { Component } from 'react'
import PropTypes from "prop-types"
import Shape from "../components/commons/shape"
import Modal from "../gadgets/modal"

export default class ButtonModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
        this.modalButtonStyle = {
            display: "block",
            width: props.width,
            height: "64px",
        }
    }

    handleToggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        const { onClick, width, depth, className, children} = this.props
        const { showModal } = this.state

        return (
            <div>
                <a onClick={onClick} >
                    <Shape 
                        type="box" 
                        width={width} 
                        height="64px" 
                        depth={depth} 
                        className={`hover-card-3 default-transition ${className}`} 
                    />
                </a>
                {showModal &&(
                    <Modal onCloseRequest={() => this.handleToggleModal()}>
                        {
                            children
                        }
                    </Modal>
                )}
            </div>
        )
    }
}

ButtonModal.prototype = {
    depth: PropTypes.number,
    width: PropTypes.string,
    className: PropTypes.string,
}

ButtonModal.defaultProps = {
    depth: 2,
    width: "128px",
    className: "",
}