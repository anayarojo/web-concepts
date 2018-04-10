import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Feacture from "../controls/feacture"

const FeacturesList = (props) => {
    return (
            <BoxContainer width="100%" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.feactures.map((index, item) =>{
                    return(
                        <BoxContainer key={`feacture-container-${index}`} width="auto" height="auto" className="flex-basis-200">
                            <Feacture key={`feacture-${index}`} depth={4} className="padding-top-md padding-bottom-md padding-left-sm padding-right-sm hover-bg-depth-1 hover-card-3 default-transition" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default FeacturesList
