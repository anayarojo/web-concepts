import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"
import Logo from "../controls/logo"
import WebNavigation from "../controls/web-navigation"
import MobileNavigation from "../controls/mobile-navigation"
import Container from "../commons/container"

const Navigation = (props) => {

    const items = ["feactures", "related-products", "plans", "clients", "contact"]

    return (
        <ShapeContainer id="navigation" width="100%" height="64px" className={`bg-depth-1 ${props.headerFixed ? "position-fixed card-2 z-index-10" : ""}`}>
            <Container className="flex-row align-items-flex-start justify-content-flex-space-between">
                <Logo />
                {
                    props.mobile ?
                    <MobileNavigation menu={items} />
                    :
                    <WebNavigation menu={items} />
                }
            </Container>
        </ShapeContainer>
    )
}

export default Navigation