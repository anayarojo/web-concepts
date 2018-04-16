import React, { Component } from 'react'
import {createPortal} from "react-dom"

export default class ExternalContainer extends Component {

    render() {
        return createPortal(
            this.props.children,
            document.getElementById("external-container")
        )
    }
}