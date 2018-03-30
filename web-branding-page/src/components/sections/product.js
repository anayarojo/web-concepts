import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Article from "../controls/article"
import Image from "../controls/image"
import Image3d from "../controls/image-3d"

const Product = (props) => {

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-1 padding-top-md padding-bottom-md">
            <Container className="flex-row flex-wrap align-items-flex-stretch justify-content-flex-space-between">
                <BoxContainer width="auto" height="auto" className="flex-basis-400 flex-row align-items-flex-center justify-content-flex-space-around">
                    <Image3d size="300px" depth={2} />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="flex-basis-600">
                    <Article titleDepth={2} textDepth={3} textSize={3}  />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Product