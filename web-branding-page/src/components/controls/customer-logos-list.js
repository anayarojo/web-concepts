import React from "react"
import BoxContainer from "../commons/shape-container"
import Image3d from "../controls/image-3d"

const CustomerLogosList = (props) => {
    return (
        <BoxContainer width="100%" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.logos.map((logo, index) => {
                    return (
                        <BoxContainer key={`customer-logo-${index}`} width="auto" height="auto" className="flex-basis-300">
                            <Image3d key={`customer-logo-${index}`} type={logo} depth={2} className="margin-center" />
                        </BoxContainer>
                    )
                })
            }
        </BoxContainer>
    )
}

export default CustomerLogosList
