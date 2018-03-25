import React from "react"
import Box from "../commons/box"
import Shape from "../commons/shape"
import BoxContainer from "../commons/box-container"
import Container from "../commons/container"

const Hero = (props) => {

    const menu = [1, 2, 3, 4, 5]

    return (
        <BoxContainer depth="4" width="100%" height="400px">
            <br />
            <br />
            <Container type="row" align="flex-start" justify="space-between">
                <BoxContainer width="70%" height="300px" type="column" align="flex-start" justify="space-between">
                    <Box depth="2" width="150px" height="32px" />
                    <Box depth="2" width="100%" height="20px" />
                    <Box depth="2" width="100%" height="20px" />
                    <Box depth="2" width="100%" height="20px" />
                    <Box depth="2" width="100%" height="20px" />
                    <Box depth="2" width="90%" height="20px" />
                    <Box depth="2" width="80%" height="20px" />
                    <Box depth="2" width="70%" height="20px" />
                </BoxContainer>
                <BoxContainer width="30%" height="300px" type="column" align="center" justify="center">
                    <Box depth="2" width="250px" height="250px" />
                </BoxContainer>
            </Container>
            <br />
            <br />
        </BoxContainer>
    )
}

export default Hero