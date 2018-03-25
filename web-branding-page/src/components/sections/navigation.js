import React from "react"
import Box from "../commons/box"
import Shape from "../commons/shape"
import BoxContainer from "../commons/box-container"
import Container from "../commons/container"

const Navigation = (props) => {

    const menu = [1, 2, 3, 4, 5]

    return (
        <BoxContainer depth="1" width="100%" height="64px">
            <Container type="row" align="flex-start" justify="space-between">
                <BoxContainer width="210px" height="64px" type="row" align="center" justify="space-between">
                    <Shape type="ball" depth="2" size="48px" />
                    <Box depth="2" width="150px" height="32px" />
                </BoxContainer>
                <BoxContainer width="500px" height="64px" type="row" align="center" justify="space-between">
                    {
                        menu.map((index, item) => {
                            return (
                                <Box depth="2" width="90px" height="15px" />
                            )
                        })
                    }
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default Navigation