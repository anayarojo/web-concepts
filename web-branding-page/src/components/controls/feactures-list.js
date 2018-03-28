import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Feacture from "../controls/feacture"

const FeacturesList = (props) => {
    return (
            <BoxContainer width="auto" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-between flex-wrap">
            {
                props.feactures.map((index, item) =>{
                    return(
                        <BoxContainer width="auto" height="auto" className="flex-basis-200 padding-sm">
                            <Feacture depth={4} className="margin-top-sm margin-bottom-sm" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default FeacturesList
