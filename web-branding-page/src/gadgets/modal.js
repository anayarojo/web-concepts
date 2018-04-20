import React, { Component } from 'react'
import isNil from 'lodash/fp/isNil'
import Control from "../components/commons/shape-container"
import IconButton from "../components/controls/icon-button"
import Button from "../components/controls/button"
import ModalContainer from "../containers/modal-container"

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false)
        document.addEventListener('click', this.handleOutsideClick, false)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false)
        document.removeEventListener('click', this.handleOutsideClick, false)
    }

    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            },
        };

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;

        if (!isNil(this.modal)) {
            if (!this.modal.contains(e.target)) {
                onCloseRequest();
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
        }
    }

    backgroundActionStyle = {
        zIndex: "1000",
        overflowY: "auto",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        position: "fixed",
    }

    backgroundStyle = {
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

    render() {

        const {
            onCloseRequest,
            children,
        } = this.props;

        return (
            <a onClick={onCloseRequest} style={this.backgroundActionStyle}>
                <Control styles={this.backgroundStyle}>
                    <Control ref={node => (this.modal = node)} width="auto" height="auto" className="bg-depth-1 flex-basis-600 card-5">
                        <Control width="auto" height="auto" className="flex-column flex-align-items-flex-stretch padding-xs">
                            <Control width="100%" height="48px" className="flex-row justify-content-flex-end">
                                <IconButton onClick={onCloseRequest} size={48} depth={5} />
                            </Control>
                            <Control width="auto" height="auto" className="padding-xs">
                                {
                                    children
                                }
                            </Control>
                            <Control width="100%" height="48px" className="flex-row justify-content-flex-end">
                                <Button onClick={onCloseRequest} depth={5} />
                            </Control>
                        </Control>
                    </Control>
                </Control>
            </a>
        )
    }
}