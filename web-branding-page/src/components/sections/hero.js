import React from "react"
import Shape from "../commons/shape"
import ShapeContainer from "../commons/shape-container"
import Container from "../commons/container"

const Hero = (props) => {

    const menu = [1, 2, 3, 4, 5]

    return (
        <ShapeContainer width="100%" height="400px" className="bg-depth-4 padding-top-md padding-bottom-md">
            <Container className="flex-row align-items-flex-start justify-content-flex-space-between">
                <ShapeContainer width="70%" height="300px" className="flex-column align-items-flex-start justify-content-flex-space-between">
                    <Shape type="box" width="150px" height="32px" className="bg-depth-2" />
                    <Shape type="box" width="100%" height="20px" className="bg-depth-2" />
                    <Shape type="box" width="100%" height="20px" className="bg-depth-2" />
                    <Shape type="box" width="100%" height="20px" className="bg-depth-2" />
                    <Shape type="box" width="100%" height="20px" className="bg-depth-2" />
                    <Shape type="box" width="90%" height="20px" className="bg-depth-2" />
                    <Shape type="box" width="80%" height="20px" className="bg-depth-2" />
                    <Shape type="box" width="70%" height="20px" className="bg-depth-2" />
                </ShapeContainer>
                <ShapeContainer width="30%" height="300px" className="flex-column align-items-flex-center justify-content-flex-center">
                    <Shape type="box" width="250px" height="250px" className="bg-depth-2" />
                </ShapeContainer>
            </Container>
        </ShapeContainer>
    )
}

export default Hero