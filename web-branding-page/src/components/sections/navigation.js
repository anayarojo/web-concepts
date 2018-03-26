import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"
import Container from "../commons/container"

const Navigation = (props) => {

    const menu = [1, 2, 3, 4, 5]

    return (
        <ShapeContainer width="100%" height="64px" className="bg-depth-1">
            <Container className="flex-row align-items-flex-start justify-content-flex-space-between">
                <ShapeContainer width="210px" height="64px" className="flex-row align-items-flex-center justify-content-flex-space-between">
                    <Shape type="ball" width="48px" height="48px" className="bg-depth-2" />
                    <Shape type="box" width="150px" height="32px" className="bg-depth-2" />
                </ShapeContainer>
                <ShapeContainer width="500px" height="64px" className="flex-row align-items-flex-center justify-content-flex-space-between">
                    {
                        menu.map((index, item) => {
                            return (
                                <Shape type="box" width="90px" height="15px" className="bg-depth-2" />
                            )
                        })
                    }
                </ShapeContainer>
            </Container>
        </ShapeContainer>
    )
}

export default Navigation