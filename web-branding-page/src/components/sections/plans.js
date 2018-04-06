import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import PlansList from "../controls/plans-list"

const Plans = (props) => {

    const items = [1, 2, 3]

    return (
        <BoxContainer width="100%" height="auto" className="bg-depth-2 padding-top-md padding-bottom-md">
            <Container className="flex-column align-items-flex-stretch justify-content-flex-center">
                <Title width="300px" depth={4} className="margin-center" />
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap">
                    <PlansList plans={items} />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Plans
