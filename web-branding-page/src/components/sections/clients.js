import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import CustomerCommentsList from "../controls/customer-comments-list"
import CustomerLogosList from "../controls/customer-logos-list"
import Image3d from "../controls/image-3d"
import Image from "../controls/image"

const Clients = (props) => {

    const comments = [1, 2, 3]
    const logos = ["box", "ball", "triangle"]

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-0 padding-top-md padding-bottom-md">
            <Container className="flex-column align-items-flex-stretch justify-content-flex-center">
                <Image3d type="triangle" />
                <Image type="triangle" />
                <Title width="300px" depth={3} className="margin-center" />
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap margin-top-md margin-bottom-md">
                    <CustomerCommentsList comments={comments} />
                </BoxContainer>
                <Title width="300px" depth={3} className="margin-center" />
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap margin-top-md margin-bottom-md">
                    <CustomerLogosList logos={logos} />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Clients
