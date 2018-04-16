import React, { Component } from 'react'
import IndexPage from "../components/pages/index"
import ModalContainer from "../containers/modal-container"
import Modal from "../components/controls/modal"

export default class Index extends Component {

    state = {
        headerFixed: false,
        openedMenu: false,
        mobile: false,
        showModal: false,
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
        if (window.innerWidth <= 768){
            if(!this.state.mobile){
                this.setState({
                    mobile: true
                })
            }
        }
        else {
            if (this.state.mobile){
                this.setState({
                    mobile: false
                })
            }
        }
    }

    handleToggleMenu = () => {
        this.setState({
            openedMenu: !this.state.openedMenu
        })
    }

    handleContactSubmit = () => {
        console.log("click");
        this.setState({
            showModal: true
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
                <IndexPage state={this.state} handleContactSubmit={this.handleContactSubmit} />
                <ModalContainer>
                {
                    this.state.showModal &&
                    <Modal />
                }
                </ModalContainer>
            </div>
        )
    }
}
