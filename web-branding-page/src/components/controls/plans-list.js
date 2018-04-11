import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Plan from "../controls/plan"

const PlansList = (props) => {
    return (
        <BoxContainer width="100%" height="auto" className={`flex-row flex-wrap align-items-flex-center ${props.mobile ? "justify-content-flex-space-around" : "justify-content-flex-space-between"}`}>
            {
                props.plans.map((index, item) =>{
                    return(
                        <BoxContainer key={`plan-container-${index}`} width="auto" height="auto" className="flex-basis-300">
                            <Plan key={`plan-${index}`} className="margin-top-sm margin-bottom-sm hover-card-4 default-transition" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default PlansList
