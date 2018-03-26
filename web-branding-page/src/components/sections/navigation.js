import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"
import Logo from "../controls/logo"
import WebNavigation from "../controls/web-navigation"
import Container from "../commons/container"

const Navigation = (props) => {

    const items = [1, 2, 3, 4, 5]

    return (
        <ShapeContainer width="100%" height="64px" className="bg-depth-1">
            <Container className="flex-row align-items-flex-start justify-content-flex-space-between">
                <Logo />
                <WebNavigation menu={items} />
            </Container>
        </ShapeContainer>
    )
}

export default Navigation