import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Feacture from "../controls/feacture"

const FeacturesList = (props) => {
    return (
            <BoxContainer width="auto" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.feactures.map((index, item) =>{
                    return(
                        <BoxContainer key={`feacture-container-${index}`} width="auto" height="auto" className="flex-basis-200 padding-sm">
                            <Feacture key={`feacture-${index}`} depth={4} className="padding-top-sm padding-bottom-sm padding-left-xs padding-right-xs hover-box-shadow-2" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default FeacturesList
