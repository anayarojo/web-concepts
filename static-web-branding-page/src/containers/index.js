import React, { Component } from 'react'
import IndexPage from "../components/pages/index"

export default class Index extends Component {

    state = {
        headerFixed: false,
        openedMenu: false,
        siteWidth: window.innerWidth,
        siteHeight: window.innerHeight,
    }

    paddingHash = () => {
        scrollBy(0, -64)
    }

    handlePageScroll = () => {
        if (this.state.headerFixed != window.pageYOffset > 64) {
            this.setState({
                headerFixed: !this.state.headerFixed,
            })
        }
    }

    handleResize = () => {
        this.setState({
            siteWidth: window.innerWidth,
            siteHeight: window.innerHeight,
        })
    }

    handleToggleMenu = () => {
        this.setState({
            openedMenu: !this.state.openedMenu
        })
    }

    componentDidMount() {
        if (location.hash) {
            this.paddingHash()
        }
        window.addEventListener("resize", this.handleResize)
        window.addEventListener("scroll", this.handlePageScroll)
        window.addEventListener("hashchange", this.paddingHash)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize)
        window.removeEventListener('scroll', this.handlePageScroll)
        window.removeEventListener("hashchange", this.paddingHash)
    }

    render() {
        return (
            <div id="brandingpage-app">
                <IndexPage />
            </div>
        )
    }
}
