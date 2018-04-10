import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"
import Logo from "../controls/logo"
import WebNavigation from "../controls/web-navigation"
import MobileNavigation from "../controls/mobile-navigation"
import Container from "../commons/container"

const Navigation = (props) => {

    const items = [1, 2, 3, 4, 5]

    return (
        <ShapeContainer width="100%" height="64px" className={`bg-depth-1 ${props.headerFixed ? "position-fixed card-2 z-index-10" : ""}`}>
            <Container className="flex-row align-items-flex-start justify-content-flex-space-between">
                <Logo />
                {
                    props.mobile ?
                    <WebNavigation menu={items} />
                    :
                    <MobileNavigation menu={items} />
                }
            </Container>
        </ShapeContainer>
    )
}

export default Navigation