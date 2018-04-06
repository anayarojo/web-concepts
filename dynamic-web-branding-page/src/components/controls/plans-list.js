import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Plan from "../controls/plan"

const PlansList = (props) => {
    return (
            <BoxContainer width="100%" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.plans.map((index, item) =>{
                    return(
                        <BoxContainer key={`plan-container-${index}`} width="auto" height="auto" className="flex-basis-300">
                            <Plan key={`plan-${index}`} className="margin-top-sm margin-bottom-sm" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default PlansList
