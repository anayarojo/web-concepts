import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Feacture from "../controls/feacture"
import FeactureList from "../controls/feactures-list"

const Feactures = (props) => {

    const items = [1, 2, 3, 4, 5, 6]

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-2 padding-top-md padding-bottom-md">
            <Container className={`flex-column align-items-flex-stretch`}>
                <Title width="300px" depth={4} className="margin-center" />
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap">
                    <FeactureList mobile={props.mobile} feactures={items} />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Feactures
