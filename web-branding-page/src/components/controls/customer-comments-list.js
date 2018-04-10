import React from "react"
import BoxContainer from "../commons/shape-container"
import CustomerComment from "../controls/customer-comment"

const CustomerCommentsList = (props) => {
    return (
        <BoxContainer width="100%" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.comments.map((index, item) => {
                    return (
                        <BoxContainer key={`customer-comment-${index}`} width="auto" height="auto" className="flex-basis-300">
                            <CustomerComment key={`customer-comment-${index}`} depth={4} className="padding-top-sm padding-bottom-sm padding-left-xs padding-right-xs hover-card-3 default-transition" />
                        </BoxContainer>
                    )
                })
            }
        </BoxContainer>
    )
}

export default CustomerCommentsList
