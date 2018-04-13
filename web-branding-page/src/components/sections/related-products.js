import React from "react"
import BoxContainer from "../commons/shape-container"
import Container from "../commons/container"
import Title from "../controls/title"
import Product from "../controls/product"
import ProductList from "../controls/products-list"

const RelatedProducts = (props) => {

    const items = [1, 2, 3, 4, 5, 6]

    return (
        <BoxContainer id="related-products" width="100%" height="auto" className="bg-depth-1 padding-top-md padding-bottom-md">
            <Container className={`flex-column align-items-flex-stretch ${props.mobile ? "justify-content-flex-center" : "justify-content-flex-space-between"}`}>
                <Title width="300px" depth={4} className="margin-center" />
                <BoxContainer width="auto" height="auto" className="flex-row flex-wrap">
                    <ProductList mobile={props.mobile} products={items} />
                </BoxContainer>
            </Container>
        </BoxContainer>
    )
}

export default RelatedProducts
