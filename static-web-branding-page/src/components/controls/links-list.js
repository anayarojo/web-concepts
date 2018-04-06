import React from "react"
import BoxContainer from "../commons/shape-container"
import Title from "../controls/title"
import Link from "../controls/link"

const LinksList = (props) => {
    return (
        <BoxContainer width="100%" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.links.map((index, item) => {
                    return (
                        <BoxContainer key={`links-list-${index}`} width="150px" height="auto" className="flex-column align-items-flex-center justify-content-flex-space-around flex-wrapflex-basis-300">
                            <Title key={`link-list-title-${index}`} width="100px" depth={2} className="margin-center" />
                            <Link key={`link-list-text-1-${index}`} width="90%" depth={3} className="margin-center" />
                            <Link key={`link-list-text-2-${index}`} width="70%" depth={3} className="margin-center" />
                            <Link key={`link-list-text-3-${index}`} width="100%" depth={3} className="margin-center" />
                            <Link key={`link-list-text-4-${index}`} width="90%" depth={3} className="margin-center" />
                        </BoxContainer>
                    )
                })
            }
        </BoxContainer>
    )
}

export default LinksList
