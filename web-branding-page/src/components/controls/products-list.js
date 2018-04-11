import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Product from "../controls/product"

const ProductsList = (props) => {
    return (
        <BoxContainer width="100%" height="auto" className={`flex-row flex-wrap align-items-flex-center ${props.mobile ? "justify-content-flex-space-around" : "justify-content-flex-space-between" }`}>
            {
                props.products.map((index, item) =>{
                    return(
                        <BoxContainer key={`product-container-${index}`} width="auto" height="auto" className="flex-basis-200">
                            <Product key={`product-${index}`} depth={3} className="padding-top-md padding-bottom-md padding-left-sm padding-right-sm hover-bg-depth-0 hover-card-3 default-transition" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default ProductsList
