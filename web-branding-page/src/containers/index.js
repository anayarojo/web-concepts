import React, { Component } from 'react'
import Image from "../components/commons/image"

export default class Index extends Component {

    render() {

        const styles = {
            width: "100px",
            height: "100px"
        }

        return (
            <div id="index" style={styles}>
                <Image depth={2} />
            </div>
        )
    }
}