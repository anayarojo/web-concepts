import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Article from "../controls/article"
import Image from "../controls/image"
import Image3d from "../controls/image-3d"

const Hero = (props) => {

    const menu = [1, 2, 3, 4, 5]

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-4 padding-top-md padding-bottom-md">
            <Container className="flex-row align-items-flex-start justify-content-flex-space-between">
                <BoxContainer width="auto" height="auto" className="image-a flex-basis-600">
                    <Article titleDepth="1" textDepth="2" textSize="2"  />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="flex-basis-400 flex-row align-items-flex-center justify-content-flex-center">
                    <Image3d size="300px" depth="2" />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Hero