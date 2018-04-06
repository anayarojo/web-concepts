import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import ContactForm from "../controls/contact-form"
import Image3d from "../controls/image-3d"

const Contact = (props) => {

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-2 padding-top-md padding-bottom-md">
            <Container className="flex-row align-items-flex-stretch justify-content-flex-center flex-wrap-reverse">
                <BoxContainer width="auto" height="auto" className="image-a flex-basis-600">
                    <ContactForm titleDepth={4} titleWidth="300px" />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="flex-basis-400 flex-row align-items-flex-center justify-content-flex-center">
                    <Image3d size={300} depth={3} />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Contact