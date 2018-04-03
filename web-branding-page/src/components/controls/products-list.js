import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Product from "../controls/product"

const ProductsList = (props) => {
    return (
            <BoxContainer width="100%" height="auto" className="flex-row align-items-flex-center justify-content-flex-space-around flex-wrap">
            {
                props.products.map((index, item) =>{
                    return(
                        <BoxContainer key={`product-container-${index}`} width="auto" height="auto" className="flex-basis-200 padding-sm">
                            <Product key={`product-${index}`} depth={3} className="margin-top-sm margin-bottom-sm" />
                        </BoxContainer>
                    )
                })
            }
            </BoxContainer>
    )
}

export default ProductsList
