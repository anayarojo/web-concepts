import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Text from "../controls/text"
import LinksList from "../controls/links-list"

const Footer = (props) => {

    const links = [1, 2, 3, 4, 5, 6]

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-5 padding-top-md padding-bottom-md">
            <Container className="flex-column align-items-flex-stretch justify-content-flex-center">
                <BoxContainer width="auto" height="auto" className="margin-bottom-md">
                    <Title width="300px" depth={1} className="margin-center" />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap">
                    <LinksList links={links} />
                </BoxContainer>
                <BoxContainer width="auto" height="auto" className="margin-top-md margin-bottom-xs">
                    <Text width="200px" depth={3} className="margin-center" />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Footer
