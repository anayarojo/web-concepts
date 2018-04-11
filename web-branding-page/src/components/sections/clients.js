import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import CustomerCommentsList from "../controls/customer-comments-list"
import CustomerLogosList from "../controls/customer-logos-list"

const Clients = (props) => {

    const comments = [1, 2, 3]
    const logos = ["box", "ball", "triangle", "box", "ball", "triangle"]

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-0 padding-top-md padding-bottom-md">
            <Container className="flex-column align-items-flex-stretch justify-content-flex-center">
                <BoxContainer width="auto" height="auto" className="margin-bottom-md">
                    <Title width="300px" depth={3} className="margin-center" />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap margin-top-md margin-bottom-md">
                    <CustomerCommentsList mobile={props.mobile} comments={comments} />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="margin-top-md margin-bottom-md">
                    <Title width="300px" depth={3} className="margin-center" />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap margin-top-md margin-bottom-md">
                    <CustomerLogosList mobile={props.mobile} logos={logos} />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Clients
